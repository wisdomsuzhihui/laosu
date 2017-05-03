'use strict';

var mongoose = require('mongoose');

exports.index = function (req, res) {
  res.render('index/index', {
    title: '老苏首页'
  })
}