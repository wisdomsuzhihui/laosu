"use strict";

var express = require('express'), // 加载express模块
  path = require('path'), // 引入路径核心模块
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  fs = require('fs'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  mongoStore = require('connect-mongo')(session),
  http = require('http'),

  port = process.env.PORT || 3000,
  app = express(),

  dbUrl = 'mongodb://127.0.0.1/laosu';

mongoose.connect(dbUrl);

app.set('views', './app/views/pages');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.locals.moment = require('moment');

// 对application/x-www-form-urlencoded格式内容进行解析
app.use(bodyParser.urlencoded({
  extended: true
}));

// 对application/json格式进行解析
app.use(bodyParser.json());

// models loading 
var models_path = __dirname + 'app/models/';

// 路径加载函数，加载各模型的路径,所以可以直接通过mongoose.model加载各模型 这样即使模型路径改变也无需更改路径
var walk = function (path) {
  fs
    .readdirSync(path)
    .forEach(function (file) {
      var newPath = path + '/' + file,
        stat = fs.statSync(newPath);
      // 如果是文件
      if (stat.isFile()) {
        if (/(.*)\.(is|coffee)/.test(file)) {
          require(newPath);
        }
      } else if (stat.isDirectory()) {
        walk(newPath);
      }
    });
};
// 加载模型所在路径
walk(models_path);


app.use(session({
  secret: 'douban', // 设置的secret字符串，来计算hash值并放在cookie中
  resave: false, // session变化才进行存储
  saveUninitialized: true,
  // 使用mongo对session进行持久化，将session存储进数据库中
  store: new mongoStore({
    url: dbUrl, // 本地数据库地址
    collection: 'sessions' // 存储到mongodb中的字段名
  })
}));

var env = process.env.NODE_ENV || 'development'; // 获取当前环境

// 如果是开发环境
if (env === 'development') {
  app.set('showStackError', true); // 在屏幕上将错误信息打印出来
  app.use(logger(':method :url :status')); // 显示请求的类型、路径和状态
  app.locals.pretty = true; // 源码格式化，不要压缩
  // mongoose.set('debug',true);                    // 显示数据库查询信息
}

require('./route/router')(app); // 路由控制

app.listen(port); // 服务器监听端口

console.log('douban started on port:' + port);