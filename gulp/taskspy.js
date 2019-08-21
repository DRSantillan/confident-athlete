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
	'./app/index.html',
	'./app/series/index.html',
	'./app/series/fearless/index.html',
	'./app/series/fearless/introduction.html',
	'./app/series/fearless/day-1.html',
	'./app/series/fearless/day-2.html',
	'./app/series/fearless/day-3.html',
	'./app/series/fearless/day-4.html',
	'./app/series/fearless/day-5.html',
	'./app/series/fearless/day-6.html',
	'./app/series/fearless/day-7.html',
	'./app/series/fearless/day-8.html',
	'./app/series/fearless/day-9.html',
	'./app/series/fearless/day-10.html',
	'./app/series/fearless/day-11.html',
	'./app/series/fearless/day-12.html',
	'./app/series/fearless/day-13.html',
	'./app/series/fearless/day-14.html',
	'./app/series/fearless/new-beginning.html',
	'./app/series/fearless/commitment-contract.html',
	'./app/series/fearless/appendix.html'
];

const watchTasks = () => {
	browserSync.init({
		notify: false,
		server: {
			baseDir: 'app'
		}
	});
	watch(pages, series(html, reload));
	watch(['./app/assets/css/**/*.css'], series(styles, injectStyles));
	watch(['./app/assets/js/**/*.js'], series(scripts, reload));
};

export default watchTasks;
export const spy = watchTasks;
