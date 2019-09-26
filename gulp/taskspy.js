import { watch, series, src } from 'gulp';
import styles from './styles';
import html from './html';
import scripts from './scripts';
import logger from './logger';
import browsersync from 'browser-sync';
const browserSync = browsersync.create();

const injectStyles = done => {
	logger('Styles Injection');
	src('./app/dev/assets/css/').pipe(browserSync.stream());
	done();
};

const reload = done => {
	browserSync.reload();
	done();
};

const pages = [
	'./app/index.html'
];

const watchTasks = () => {
	browserSync.init({
		notify: false,
		server: {
			baseDir: 'app'
		}
	});
	watch('./app/series/**/*.html', series(html, reload));
	watch(['./app/assets/css/**/*.css'], series(styles, injectStyles));
	watch(['./app/assets/js/**/*.js'], series(scripts, reload));
};

export default watchTasks;
export const spy = watchTasks;
