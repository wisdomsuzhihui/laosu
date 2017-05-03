'use strict';

var Index = require('../app/controllers/index/index'),
  multipart = require('connect-multiparty'), // 处理文件上传中间件
  multipartMiddleware = multipart();


module.exports = function (app) {
  app.use(function (req, res, next) {
    // 将session中保存的用户名存储到本地变量中
    app.locals.user = req.session.user;
    next();
  })
  app.get('/', Index.index)
}