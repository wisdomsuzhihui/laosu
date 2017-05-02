var webpack = require('webpack'),
  // 使用插件将组件中相同部分抽成一个单独文件
  CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin"),
  // JS压缩插件
  uglifyJsPlugin = webpack.optimize.UglifyJsPlugin,
  path = require('path');