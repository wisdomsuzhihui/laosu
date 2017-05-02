'use strict';

var Index = require('../app/controllers/index/index')


module.exports = function (app) {
  app.use(function (req, res, next) {
    // 将session中保存的用户名存储到本地变量中
    app.locals.user = req.session.user;
  })
}

app.get('/', Index.index)