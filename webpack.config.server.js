const nodeExternals = require('webpack-node-externals');
const path = require('path');
const srcPath = path.resolve(__dirname, 'server');
const distPath = path.resolve(__dirname, 'dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: srcPath,
  entry: './index.js',
  output: {
    path: distPath,
    filename: 'server.js'
  },
  plugins: [
    new ExtractTextPlugin('style.bundle.css'),
  ],
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // CSS loader to CSS files
      // Files will get handled by css loader and then passed to the extract text plugin
      // which will write it to the file we defined above
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      // File loader for image assets
      // We'll add only image extensions, but you can things like svgs, fonts and videos
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  externals: nodeExternals(),
  devtool: 'source-map'
};