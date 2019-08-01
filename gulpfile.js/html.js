const { watch, series, parallel, src, dest } = require('gulp');
const { logger } = require('./tools');

const html = () => {
	logger('HTML');
	return src('./app/index.html').pipe(dest('./app/dev/'));
};

exports.html = html;
