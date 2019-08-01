const browserSync = require('browser-sync').create();

browserSync.init({
	notify: false,
	server: {
		baseDir: 'app'
	}
});

const reload = cb => {
	browserSync.reload();
	cb();
};

exports.browserSync = browserSync;
exports.reload = reload;
