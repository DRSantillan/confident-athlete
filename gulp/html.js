import { src, dest } from 'gulp';
import logger from './logger';

const html = () => {
	logger('HTML');
	return src('./app/index.html').pipe(dest('./app/dev/'));
};

export default html;
