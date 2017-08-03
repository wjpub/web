const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const Webpack = require('webpack');

module.exports = Merge(CommonConfig, {
    devtool: "source-map",
    plugins: [
        new Webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),
        new Webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new Webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new Webpack.HashedModuleIdsPlugin(),
    ]
});