var express = require('express');
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');
var app = module.exports = express();

app.use(require('body-parser').json());

app.use(function (req, res, next) {
  console.log('STORAGE %s', req.path);
  next();
});

app.use(express.static(path.resolve(__dirname + '/..')));

app.post('/storage/upload', function (req, res) {
  var form = new formidable.IncomingForm();
  form.uploadDir = path.resolve(__dirname + '/../storage');
  form.parse(req, function () {
    res.send('ok');
  });
  form.on('file', function (name, file) {
    fs.rename(file.path, path.resolve(__dirname + '/../storage/' + file.name));
  });
});

app.put('/storage/*', function (req, res) {
  fs.writeFile(path.resolve(__dirname + '/..' + req.path), req.body.html, function () {
    console.log('done');
  });
  res.send(200).end();
});
