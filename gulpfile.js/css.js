const { src, dest } = require('gulp'),
	{ logger } = require('./tools'),
	postCss = require('gulp-postcss'),
	autoPrefixer = require('autoprefixer'),
	cssSimplevars = require('postcss-simple-vars'),
	cssNested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	cssMixins = require('postcss-mixins'),
	cssRgba = require('postcss-hexrgba'),
	{ browserSync } = require('./browsersync');

const css = () => {
	logger('CSS');
	return src('./app/assets/css/styles.css')
		.pipe(
			postCss([
				cssImport,
				cssMixins,
				cssNested,
				cssSimplevars,
				cssRgba,
				autoPrefixer()
			])
		)
		.pipe(dest('./app/dev/assets/css/'));
};

const injectCSS = () => {
	return src('./app/dev/assets/css/styles.css').pipe(browserSync.stream());
};

exports.css = css;
exports.inject = injectCSS;
