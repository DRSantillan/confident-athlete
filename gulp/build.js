import { src, dest, series, parallel } from 'gulp';
import imagemin from 'gulp-imagemin';
import del from 'del';
import usemin from 'gulp-usemin';
import nano from 'gulp-cssnano';
import uglify from 'gulp-uglify';
import rev from 'gulp-rev';
import browsersync from 'browser-sync';
const browserSync = browsersync.create();

const optimizeImages = () => {
	return src(['./app/assets/media/images/**/*'])
		.pipe(
			imagemin({
				progressive: true,
				interlaced: true,
				multipass: true
			})
		)
		.pipe(dest('./dist/assets/media/images'));
};
const deleteDistFolder = async () => {
	const deletePath = await del('./dist');
	//console.log(deletePath);
};

const useMin = () => {
	return src(['./app/index.html'])
		.pipe(
			usemin({
				css: [nano(), rev()],
				js: [uglify(), rev()]
			})
		)
		.pipe(dest('./dist'));
};

const copyFiles = () => {
	const paths = [
		'./app/**/*',
		'./app/assets/media/**',
		'!./app/series/**',
		'!./app/index.html',
		'!./app/assets/css/**',
		'!./app/assets/media/icons/**',
		'!./app/assets/media/videos/**',
		'!./app/assets/js/**',
		'!./app/dev',
		'!./app/dev/**'
	];
	return src(paths).pipe(dest('./dist'));
};

const preview = cb => {
	browserSync.init({
		notify: false,
		server: {
			baseDir: 'dist'
		}
	});
	cb();
};

export default series(
	deleteDistFolder,
	optimizeImages,
	copyFiles,
	useMin,
	preview
);
