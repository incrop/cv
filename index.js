#!/usr/bin/env node
"use strict";

let fs = require('fs');
let yamljs = require('yamljs');
let Make = require('bemaker').Make;
let bemhtml = require('bem-xjst').bemhtml;
let postcss = require('postcss');
let pobems = require('pobems');
let autoprefixer = require('autoprefixer');
let nested = require('postcss-nested');
let assets = require('postcss-assets');
let cssnano = require('cssnano');

let b = (ext) => `./build/index.${ext}`;

(new Make(require('./bemaker.json'))).build().then(() => {
    let tmpl = bemhtml.compile(fs.readFileSync(b('bemhtml.js')));
    let bemjson = yamljs.load('index.yaml');
    let html = tmpl.apply(bemjson);
    postcss([
      nested, pobems, assets,
      autoprefixer({browsers: ['> 1%', 'Last 2 versions']}),
      cssnano
    ]).process(fs.readFileSync(b('post.css'))).then(res => {
      fs.writeFileSync(b('css'), res.css);
    });
    fs.writeFileSync(b('html'), html);
});
