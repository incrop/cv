"use strict";

const { src, dest, series, parallel } = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const minify = require('gulp-clean-css');
const map = require('vinyl-map');
const { bemhtml } = require('bem-xjst');
const yamljs = require('yamljs');

function compileHtml(content) {
    const tmpl = bemhtml.compile(content.toString());
    const bemjson = yamljs.load('index.yaml');
    return tmpl.apply(bemjson);
}

function html() {
    return src('blocks/**/*.bemhtml.js')
        .pipe(concat('index.html'))
        .pipe(map(compileHtml))
        .pipe(dest('dist'));
}

function css() {
    return src('blocks/**/*.post.css')
        .pipe(postcss())
        .pipe(concat('index.css'))
        .pipe(minify())
        .pipe(dest('dist'));
}

exports.default = parallel(html, css);