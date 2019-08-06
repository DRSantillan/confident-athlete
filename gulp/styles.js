import { src, dest } from 'gulp';
import logger from './logger';
import postCss from 'gulp-postcss';
import autoPrefixer from 'autoprefixer';
import simpleVars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssImport from 'postcss-import';
import mixins from 'postcss-mixins';
import rgba from 'postcss-hexrgba';
import cssbeautify from 'gulp-cssbeautify';

const styles = () => {
	logger('Styles Sheet');
	return src('./app/assets/css/styles.css')
		.pipe(
			postCss([cssImport, mixins, nested, simpleVars, rgba, autoPrefixer()])
		)
		.pipe(
			cssbeautify({
				indent: '		',
				autosemicolon: true
			})
		)
		.pipe(dest('./app/dev/assets/css/'));
};

export default styles;
