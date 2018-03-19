const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const autoprefixer = require("autoprefixer");

const browserConfig = {
  entry: "./src/browser/index.js",
  output: {
    path: path.resolve("./build"),
    filename: "[name].min.js"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "media/[name].[ext]",
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
      filename: "css/[name].css"
    }),
    new SWPrecacheWebpackPlugin(
      {
        minify: true,
        cacheId: 'react-scratch',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'scratch-worker.js',
        maximumFileSizeToCacheInBytes: 4194304,
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
      }
    ),
  ],
  optimization: {
    minimize: true,
    
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
    
  }
};

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  output: {
    path: path.resolve("./build"),
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
          name: "media/[name].[ext]",
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
  },
  optimization: {
    minimize: true
  }
};

module.exports = [browserConfig, serverConfig];