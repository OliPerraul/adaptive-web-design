const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ['@babel/polyfill',
            './src/index.html'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.html'
    },
    devServer: {
     contentBase: './dist'   
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[hash].css'
          }),
      
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
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
                test: /\.(png|jpg|jpeg|gif|mp4|svg|ico)(\?.*$|$)/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'img/'
                }
              }
        
        ]
    }
};