const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devServer = (isDev) => (!isDev ? {} : {
  devServer: {
    open: true,
    hot: true,
    port: 8080,
    // contentBase: path.join(__dirname, 'img'),
  },
});

const esLintPlugin = (isDev) => (isDev ? [] : [new EslintPlugin({ extensions: ['ts', 'js'] })]);

module.exports = ({ develop }) => ({
  mode: develop ? 'development' : 'production',
  devtool: develop ? 'inline-source-map' : false,
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

      {
        test: /\.сss$/i,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
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
    // new CopyPlugin({
    //   patterns: [{ from: './img', to: './assets' }],
    // }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    ...esLintPlugin(develop),
  ],
  ...devServer(develop),
});
