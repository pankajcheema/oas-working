'use strict'

var varpetController = require('./petControllerService');

module.exports.funcpetGET = function funcpetGET(req, res, next) {
  varpetController.funcpetGET(req.swagger.params, res, next);
};