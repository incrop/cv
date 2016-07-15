#!/usr/bin/env node

let fs = require('fs');
let yamljs = require('yamljs');
let Make = require('bemaker').Make;
let bemhtml = require('bem-xjst').bemhtml;
let postcss = require('postcss');
let pobems = require('pobems');

let b = (ext) => `./build/index.${ext}`;

(new Make(require('./bemaker.json'))).build().then(() => {
    let tmpl = bemhtml.compile(fs.readFileSync(b('bemhtml.js')));
    let bemjson = yamljs.load('index.yaml');
    let html = tmpl.apply(bemjson);
    // let css = postcss([pobems]).process(fs.readFileSync(b('post.css')).css);

    fs.writeFileSync(b('html'), html);
    // fs.writeFileSync(b('css'), css);
})
