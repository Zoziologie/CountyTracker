const path = require('path');
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  plugins: [
        new webpack.ProvidePlugin({
            mapboxgl: 'mapbox-gl'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
          },
    }
};