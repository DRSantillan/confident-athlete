import { src, dest } from 'gulp';
import logger from './logger';

const html = done => {
	logger('HTML');
	src('./app/**/*.html').pipe(dest('./app/dev/'));

	done();
};

export default html;
