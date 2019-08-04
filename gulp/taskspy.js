import { watch, series, src } from 'gulp';
import styles from './styles';
import html from './html';
import scripts from './scripts';
import logger from './logger';
import browsersync from 'browser-sync';
const browserSync = browsersync.create();

const injectStyles = () => {
	logger('Styles Injection');
	src('./app/dev/assets/css/').pipe(browserSync.stream());
};

const watchTasks = () => {
	browserSync.init({
		notify: false,
		server: {
			baseDir: 'app'
		}
	});
	watch(['./app/index.html'], series(html, browserSync.reload));
	watch(['./app/assets/css/**/*.css'], series(styles, injectStyles));
	watch(['./app/assets/js/**/*.js'], series(scripts, browserSync.reload));
};

export default watchTasks;
export const spy = watchTasks;
