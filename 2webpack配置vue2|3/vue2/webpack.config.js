const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	mode: 'development', // 开发模式
	entry:  './src/main.js', //入口文件
	output: {
		path: resolve(__dirname, 'dist'), // 输出文件 
		filename: 'main.js' // 输出文件名 
	},
	externals: { // cdn 
		'vue': 'Vue'
	},
	devtool: 'source-map', // 错误文件跟踪
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