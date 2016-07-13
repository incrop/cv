#!/usr/bin/env node

let fs = require('fs');
let yamljs = require('yamljs');
let Make = require('bemaker').Make;
let bemhtml = require('bem-xjst').bemhtml;
let postcss = require('postcss');
let pobems = require('pobems');

(new Make(require('./bemaker.json'))).build().then(() => {
    let tmpl = bemhtml.compile(fs.readFileSync('./build/index.bemhtml.js'));
    let bemjson = yamljs.load('index.yaml');
    console.log(tmpl.apply(bemjson));
    console.log(postcss([pobems]).process(fs.readFileSync('./build/index.post.css')).css)
})
