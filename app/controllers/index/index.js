'use strict';

var mongoose = require('mongoose');

exports.index = function (req, res) {
  res.render('/', {
    title: '老苏首页'
  })
}