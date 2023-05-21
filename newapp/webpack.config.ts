import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const webpack = require('webpack');
const mode = process.env.NODE_ENV;
const envconfig = require(path.resolve(__dirname, `.env.${mode}.js`));

const base: Configuration = {
  mode: 'development',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: ['fsevents'],
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.sass',
      '.scss',
      '.css',
    ],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: '[name].js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              additionalData: `@use '@/styles/reset.scss';`,
            },
          },
        ],
      },
      {
        test: /\.(ico|png|jpe?g|svg|eot|woff?2?)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      minify: false,
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(envconfig),
    }),
  ],
  performance: { hints: false },
  optimization: { minimize: false },
  devtool: 'inline-source-map',
};

const main: Configuration = {
  ...base,
  target: 'electron-main',
  entry: {
    main: './src/main.ts',
  },
};

const preload: Configuration = {
  ...base,
  target: 'electron-preload',
  entry: {
    main: './src/preload.ts',
  },
};

const renderer: Configuration = {
  ...base,
  target: 'web',
  entry: {
    index: './src/index.tsx',
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: false,
      inject: 'body',
      filename: 'index.html',
      scriptLoading: 'blocking',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(envconfig),
    }),
  ],
};

export default [main, preload, renderer];
