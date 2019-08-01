const { watch } = require('./watch');
const { series } = require('gulp');
const { html } = require('./html');
const { css } = require('./css');

exports.default = series(html, css, watch);
exports.watch = watch;
exports.dev = series(html, css, watch);
