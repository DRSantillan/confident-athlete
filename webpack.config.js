const path = require('path');
module.exports = {
	entry: './app/assets/js/app.js',
	output: {
		path: path.resolve(__dirname + '/app/dev/assets/', 'js'),
		filename: 'app.js'
	},
	mode: 'development'
};
