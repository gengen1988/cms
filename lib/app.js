var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var proxy = require('./proxy');

var app = module.exports = express();

app.use(favicon(path.resolve(__dirname + '/../favicon.ico')));

app.use(function (req, res, next) {
  console.log('%s %s', req.method, req.path);
  next();
});

app.use('/bower_components', express.static(path.resolve(__dirname + '/../bower_components')));
app.use(express.static(path.resolve(__dirname + '/../www')));

app.all('/api*', function (req, res) {
  proxy.web(req, res, {
    target: 'http://127.0.0.1:3000'
  });
});

app.all('/explorer*', function (req, res) {
  proxy.web(req, res, {
    target: 'http://127.0.0.1:3000'
  });
});

app.all('/storage*', function (req, res) {
  proxy.web(req, res, {
    target: 'http://127.0.0.1:1338'
  });
});

app.get('/*', function (req, res) {
  res.sendfile(path.resolve(__dirname + '/../www/index.html'));
});
