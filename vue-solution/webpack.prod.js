/**
 * Created by yuqian on 2019/5/16.
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
     filename: '[name].css',
     chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
     {
      test: /\.js$/,
      loader: 'babel-loader'
     },
     {
      test: /\.css$/,
      use: [
       { loader: MiniCssExtractPlugin.loader },
       'css-loader',
      ],
     },
     {
      test: /\.scss$/,
      use: [
       { loader: MiniCssExtractPlugin.loader },
       "css-loader", // translates CSS into CommonJS
       "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ]
     }

    ],
  },
});
