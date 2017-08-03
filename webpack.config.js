const path = require("path");
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    entry: {
        app: './src/index.js',
        print: './src/print.js',
        vender: [
            'lodash',
        ]
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
            // {
            //     test: /\.(png|jpg|jpeg|gif|svg)$/i,
            //     use: [
            //         'file-loader',
            //     ]
            // },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     use: [
            //         'file-loader',
            //     ]
            // },
            // {
            //     test: /\.(csv|tsv)$/i,
            //     use: [
            //         'csv-loader',
            //     ]
            // },
            // {
            //     test: /\.xml$/i,
            //     use: [
            //         'xml-loader'
            //     ]
            // }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'OUTPUT_MANAGEMENT',
        }),
        new ManifestPlugin({
        }),
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'vender'
        }),
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
    ]
}