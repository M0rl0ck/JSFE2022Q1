const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.ts', './src/scss/style.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    assetModuleFilename: './assets/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },

      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
        ],
      },

    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new EslintPlugin({ extensions: 'ts' }),
    new CopyPlugin({
      patterns: [{ from: './img', to: './assets' }],
    }),
    new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
  ],
};
