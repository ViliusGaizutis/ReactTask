const webpack = require('webpack');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const dotenv = require('dotenv');
const commonPaths = require('./paths');

dotenv.config({ path: './.env' });

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        test: /(\.js$|\.jsx?$)/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        options: {
          sourceMap: true
        }
      },
      { test: /\.(ts|tsx)$/, loader: 'ts-loader', exclude: [/node_modules/] },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.imagesFolder
            }
          }
        ]
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.fontsFolder
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            // load svg modules to be displayed as icons/images
            loader: 'svg-react-loader'
          },
          {
            // load svg files normally (eg. fonts, etc)
            loader: 'url-loader?limit=100000'
          }
        ]
      }
    ]
  },
  serve: {
    add: app => {
      app.use(convert(history()));
    },
    content: commonPaths.entryPath,
    dev: {
      publicPath: commonPaths.outputPath
    },
    open: true
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss']
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    new ESLintPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ]
};
