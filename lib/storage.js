var express = require('express');
var path = require('path');
var fs = require('fs');
var app = module.exports = express();

app.use(require('body-parser').json());

app.use(function (req, res, next) {
  console.log('STORAGE %s', req.path);
  next();
});

app.use(express.static(path.resolve(__dirname + '/..')));

app.put('/storage/*', function (req, res) {
  fs.writeFile(path.resolve(__dirname + '/..' + req.path), req.body.html, function () {
    console.log('done');
  });
  res.send(200).end();
});
