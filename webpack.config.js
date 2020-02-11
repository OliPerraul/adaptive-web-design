const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    '@babel/polyfill',
    './src/js/main.js',
    './src/scss/main.scss'
  ],
  output: {
    filename: 'bundle-[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|mp4|svg|ico)(\?.*$|$)/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img/'
        }
      },
      {
        test: /\.(md)(\?.*$|$)/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'md/'
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'file-loader',
        options: {
          outputPath: 'font/'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/main.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/theme-1.html',
      filename: 'theme-1.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/theme-2.html',
      filename: 'theme-2.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/theme-3.html',
      filename: 'theme-3.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/theme-4.html',
      filename: 'theme-4.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/theme-5.html',
      filename: 'theme-5.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/theme-6.html',
      filename: 'theme-6.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/theme-9.html',
      filename: 'theme-9.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/theme-10.html',
      filename: 'theme-10.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/theme-11.html',
      filename: 'theme-11.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css'
    }),
    new CleanWebpackPlugin(
      ['dist'],
      {
        verbose: false,
        dry: false,
        exclude: ['index.html']
      }
    )
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    noInfo: true
  }
};
