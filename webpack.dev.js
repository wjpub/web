const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const Webpack = require('webpack');

module.exports = Merge(CommonConfig, {
    devtool: 'inline-source-map',
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 7777,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal'
    }
});