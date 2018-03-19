require('dotenv').config();
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const autoprefixer = require("autoprefixer");

const browserConfig = {
  entry: "./src/browser/index.js",
  output: {
    path: __dirname,
    filename: "./build/bundle.js"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "build/media/[name].[ext]",
          publicPath: url => url.replace(/build/, "")
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: { importLoaders: 1, minimize: true }
            },
            {
              loader: "postcss-loader",
              options: { plugins: [autoprefixer()]}
            }
          ]
        })
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { presets: ["react"] }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "build/css/[name].css"
    }),
    new SWPrecacheWebpackPlugin(
      {
        minify: true,
        cacheId: 'react-scratch',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'build/scratch-worker.js',
        maximumFileSizeToCacheInBytes: 4194304,
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
      }
    ),
  ]
};

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  output: {
    path: __dirname,
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "build/media/[name].[ext]",
          publicPath: url => url.replace(/build/, ""),
          emit: false
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader/locals"
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { presets: ["react"] }
      }
    ]
  }
};

module.exports = [browserConfig, serverConfig];