var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'cheap-eval-source-map',
	entry: "./src/js/main.jsx",
	
	publicPath: '/dist/',
	output: {
		path : path.join("../server/dist"),
		filename : "bundle.js"
	},
	module: {
		loaders : [{
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },

		{
        test: /\.html$/,
        loader: 'file'
      },]
	},

	/*plugins: [
    new HtmlWebpackPlugin({
      title: 'React Dev Setup',
      filename: 'index.html'
    })
  ],*/

  /*node: {
  fs: "empty",
  net:"empty"
},*/

	watch: true,

	resolve: {
    extensions: ['','.js','.jsx','/index','/index.js','/index.jsx']
  }

}