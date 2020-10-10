'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
	dev: {

		// Paths
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
			'/api': {
				// target: 'http://192.168.1.56:7070', //王卫亚
				// target: 'http://192.168.1.147:8081/', //孙胤棱
				// target: 'http://192.168.1.55:8080/', //叶信梁
				target: 'http://192.168.0.57:8033/api', //测试环境
				// target: 'http://118.31.245.200:8080/zdgz-war',//外网映射
				// target: 'http://192.168.1.163:8080/',//谢尚准
				// target: 'http://192.168.1.168:8080/', //沈升辉
				changOrigin: true, //允许跨域
				pathRewrite: {
					/* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
					  实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
					 */
					'^/api': ''
				}
			},
		},

		// Various Dev Server settings
		host: 'localhost', // can be overwritten by process.env.HOST
		// host:'192.168.1.108',
		port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
		autoOpenBrowser: false,
		errorOverlay: true,
		notifyOnErrors: true,
		poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


		/**
		 * Source Maps
		 */

		// https://webpack.js.org/configuration/devtool/#development
		devtool: 'cheap-module-eval-source-map',

		// If you have problems debugging vue-files in devtools,
		// set this to false - it *may* help
		// https://vue-loader.vuejs.org/en/options.html#cachebusting
		cacheBusting: true,

		cssSourceMap: true
	},

	build: {
		// Template for index.html
		index: path.resolve(__dirname, '../dist/index.html'),

		// Paths
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: './',

		/**
		 * Source Maps
		 */

		productionSourceMap: true,
		// https://webpack.js.org/configuration/devtool/#production
		devtool: '#source-map',

		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],

		// Run the build command with an extra argument to
		// View the bundle analyzer report after build finishes:
		// `npm run build --report`
		// Set to `true` or `false` to always turn it on or off
		bundleAnalyzerReport: process.env.npm_config_report
	}
}
