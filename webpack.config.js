const webpack = require('webpack');
const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

const client = {
  entry: `${SRC_DIR}/index.js`,
  // devtools: "source-map",
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',      
        query: {
          presets: ['react', 'env']
        },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  }
};

const server = {
  entry: `${SRC_DIR}/server.jsx`,
  target: 'node',
  output: {
    filename: 'bundle-server.js',
    path: DIST_DIR,
    libraryTarget: 'commonjs-module'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',      
        query: {
          presets: ['react', 'env']
        },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  }
};

module.exports = [
  client,
  server
];