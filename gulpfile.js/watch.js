const { watch, series } = require('gulp');
const { css, inject } = require('./css');
const { html } = require('./html');
const { browserSync, reload } = require('./browsersync');

const watcher = () => {
	watch(['./app/index.html'], series(html, reload));
	watch(['./app/assets/css/**/*.css'], series(css, inject));
};

exports.watch = watcher;
