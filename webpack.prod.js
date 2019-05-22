/**
 * Created by yuqian on 2019/5/16.
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
 mode: 'production',
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
