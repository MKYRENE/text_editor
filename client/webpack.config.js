const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'J.A.T.E'
      }),
      new InjectManifest({
        swSrc: './src-sw.js', // GIVE OFFLINE CAPABILITIES SERVICE WORKING SOURCE
        swDest: 'src-sw.js', // SERVICE WORKER DESTINATION 
      }),
      //APPLICATION DESCRIPTION
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Just Another Text Editor',
        short_name: 'J.A.T.E',
        description: 'Takes notes with JavaScript syntax highlighting!',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: '/',  //LOOKING FOR ANYTHING AFTER / FOR EXAMPLE /API
        publicPath: '/', //LOOKING FOR ASSETS IN PUBLIC FOLDER EXAMPLE IMAGES, FILE PATH
        //ICON LOOKING FOR IMAGES, FILE PATHE AND DESTINATION
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],

    module: {
      rules: [ // RUN TEST EXCLUDE NODE FILE AND RUN BABEL-LOADER
        {
          test: /\.m?js$/,
          exclude: /node_modules/, //exclude node_modules
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'], 
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },

      ],
    },
  };
};
