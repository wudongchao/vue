const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	mode: 'development',
	entry: './src/main.js',
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	devtool: 'source-map',
	externals: {
		'vue': 'Vue'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},

	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: resolve(__dirname, 'public/index.html')
		})
	]
};