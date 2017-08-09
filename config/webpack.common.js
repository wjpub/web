const path = require("path");
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const glob = require('glob');

function getEntry(globPath) {
    var entries = {},
        basename, tmp, pathname;

    glob.sync(globPath).forEach(function (entry) {
        basename = path.basename(entry, path.extname(entry));  //basename 为：detail
        tmp = entry.split('/').splice(-3);
        pathname =  tmp[1] + '\/' + basename; // modify by ls正确输出js和html的路径
        entries[pathname] = entry;
    });
    return entries;
}
var entries = getEntry('./src/**/*.js');    //打包其他页面


module.exports = {
    entry: entries,
    output: {
        filename: '[name].[hash].js',
        // chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, './../dist')
    },
    resolve: {
        alias: {
            // jquery: 'path to jquery'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                use: [
                    'file-loader',
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [
                    'file-loader',
                ]
            },
            {
                test: /\.(csv|tsv)$/i,
                use: [
                    'csv-loader',
                ]
            },
            {
                test: /\.xml$/i,
                use: [
                    'xml-loader'
                ]
            },
            // {
            //     test: require.resolve("some-module"),
            //     use: 'exports-loader?file,parse=helpers.parse'
            //     // 在文件的源码中加入以下代码
            //     //  exports["file"] = file;
            //     //  exports["parse"] = helpers.parse;
            // },
            // {
            //     test: require.resolve("some-module"),
            //     use: 'imports-loader?this=>window'
            //     use: 'imports-loader?define=>false'
            // }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'TITLE',
        }),
        new ManifestPlugin(),
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'vender'
        }),
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'common',
        }),
        new Webpack.ProvidePlugin({
            // $: 'jquery',
            // jQuery: 'jquery',
            // __assign: ['tslib', '__assign'],
            // __extends: ['tslib', '__extends']
        })
    ],
}

var pages = getEntry('./src/**/*.js');
for (var pathname in pages) {
    // 配置生成的html文件，定义路径等
    var conf = {
        filename: pathname + '.html',
        template: './src/index.html',
        chunks: [pathname, 'vendor','manifest', 'index'],
        inject: true
    };
    module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}