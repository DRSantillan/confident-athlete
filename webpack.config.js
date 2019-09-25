const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

let HtmlWebPlug = new HtmlWebPackPlugin({});

module.exports = {
	entry: {
		app: './app/assets/js/app.js',
		vendor: './app/assets/js/vendor.js'
	},
	output: {
		path: path.resolve(__dirname + '/app/dev/assets/', 'js'),
		filename: '[name].js'
	},
	plugins: [],
	mode: 'development'
};
