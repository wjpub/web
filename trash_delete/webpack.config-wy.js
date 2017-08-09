const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
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

//var entries = getEntry('./App/Containers/**/*.js');    //打包其他页面
var entries = [path.join(__dirname, '../index.web.js')]; //打包首页

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'src')
  },
  entry:entries ,  // 打包别的页面
  output: {
    /* 打包后的内容输出到config.js文件目录下的 dist 目录下（没有就创建一个） */
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'   // 打包后的文件名
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/,path.join(__dirname, 'App/Containers/')],
        loaders: [
          'babel-loader?cacheDirectory=true'
        ]
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    //new webpack.IgnorePlugin(/\/Containers\//)
  ],
  resolve: {
    extensions: ['.web.js', '.js', '.jsx', '.json'],
    alias: {
      'react-native': 'react-native-web'
    }
  }
};


/* webpack插件，用来打包本地的html模板到编译后的文件中   -----打包首页用----- */

// module.exports.plugins.push(new HtmlWebpackPlugin({
//   template: path.join(__dirname, 'src/index.html'),
// }))



//-----打包别的页面用-----

// var pages = getEntry('./App/Containers/**/*.js');
// for (var pathname in pages) {
//   // 配置生成的html文件，定义路径等
//   var conf = {
//     filename: pathname + '.html',
//     template: './web/src/index.html',
//     chunks: [pathname, 'vendor','manifest'],
//     inject: true
//   };
//
//   module.exports.plugins.push(new HtmlWebpackPlugin(conf));
// }
