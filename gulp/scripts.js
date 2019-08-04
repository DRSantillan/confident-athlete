import gulp from 'gulp';
import webpack from 'webpack';
import logger from './logger';

const errors = (err, stats) => {
	if (err) {
		console.log(err.toString());
	}
	console.log(stats.toString());
};

const scripts = cb => {
	webpack(require('../webpack.config'), (err, stats) => {
		logger('Javascript');
		errors(err, stats);
		cb();
	});
};

export default scripts;
