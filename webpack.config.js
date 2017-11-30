let path =require('path');
let htmlWebpackPlugin=require('html-webpack-plugin');
let ExtractTextPlugin=require('extract-text-webpack-plugin');
let extract=new ExtractTextPlugin('build.css');
module.exports={
	entry:{
		index:'./app/index.js',
		vendor:['react','react-dom','redux','react-redux','react-router-dom']
	},
	output:{
		filename:'[name].js',
		path:path.resolve('dist')
	},
	module:{
		rules:[
			{ test: /\.js$/,use:{
				loader:'babel-loader',
				options:{
					presets:['es2015','react']
				}
			},exclude:/node_modules/},
			{ test: /\.(css|less)$/, use:extract.extract(['css-loader',{loader:'postcss-loader',options:{plugin:[require('autoprefixer')]}},'less-loader'])},
			{ test: /\.(ttf|eot|woff|woff2|otf|svg)/, loader: 'file-loader?name=./font/[name].[ext]' },
			{ test: /\.json$/, loader: 'file-loader?name=./json/[name].json' },
			{ test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=10000&name=./images/[name].[ext]' }
		]
	},
	plugins:[
		extract,
		new htmlWebpackPlugin({
			template:'./app/index.html'
		})
	],
	resolve: {
    	alias: {
      		'@': path.join(__dirname)
   		 },
    	extensions: ['.js', '.jsx']
  	},
	devtool:'source-map',//错误显示源码的错误
	devServer:{//解决跨域问题
		proxy:{
			'/api':'http://localhost:3000'
		}
	}
}