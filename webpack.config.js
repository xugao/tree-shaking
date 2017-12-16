const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		"index.foo": "./src/index.foo.js",
		"index.foo.all": "./src/index.foo.all.js",
		"index.bar": "./src/index.bar.js",
	},

	output: {
		path: path.resolve(__dirname, "dist"), // string
		// the target directory for all output files
		// must be an absolute path (use the Node.js path module)

		filename: "bundle.[name].js", // string
		// the filename template for entry chunks
	},

	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				loaders: [
					{
						test: /.js$/,
						loader: 'babel-loader',
						include: [
							path.resolve(__dirname, 'src')
						],
						exclude: /node_modules/
					}
				]
			}
		}),
		new UglifyJsPlugin()
	]
}
