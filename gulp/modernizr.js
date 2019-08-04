import modernizr from 'gulp-modernizr';
import { src, dest } from 'gulp';

const modernizer = () => {
	return src(['./app/assets/css/**/*.css', './app/assets/js/**/*.js'])
		.pipe(
			modernizr({
				options: ['setClasses']
			})
		)
		.pipe(dest('./app/dev/assets/js/'));
};

export default modernizer;
