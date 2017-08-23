'use strict'

const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./base')
const defaultSettings = require('./defaults')

// Add needed plugins here
const BowerWebpackPlugin = require('bower-webpack-plugin')

const scheme = process.env.HTTPS === 1 ? 'https://' : 'http://'
const ipAddress = process.env.IP_ADDRESS
const entry = `webpack-dev-server/client?${scheme}${ipAddress?ipAddress:'//127.0.0.1'}:${defaultSettings.port}`

const config = Object.assign({}, baseConfig, {
  entry: [
    entry,
    'webpack/hot/only-dev-server',
    './src/cex/index'
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.DefinePlugin({
      API_ENDPOINT: "'//" + ipAddress + ":3000'",
      LAST_DEPLOY: `''`
    }),
  ],
  module: defaultSettings.getDefaultModules(),
})

// Add needed loaders to the defaults here
config.module.loaders.push({
    test: /\.js$/,
    exclude: /node_modules/,
    include: [].concat(
        [ path.join(__dirname, '/../src') ]
    ),
    loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=react-hmre,plugins[]=transform-runtime,plugins[]=transform-decorators-legacy,plugins[]=transform-class-properties'
})

module.exports = config
