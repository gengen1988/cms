var express = require('express');
var open = require('open');
var fs = require('fs');
var app = express();
app.listen(1337, function () {
  open('http://localhost:1337');
});

app.use(express.static(__dirname + '/www'));
app.use(require('body-parser').json());

app.get('/api/routes', function (req, res) {
  res.send({
    '/': {
      templateUrl: 'templates/root.html'
    }
  });
});

app.get('/bower_components/*', function (req, res) {
  res.sendfile(__dirname + req.path);
});

app.put('/storage/*', function (req, res) {
  //console.log(req.body.html);
  console.log(__dirname + req.path);
  fs.writeFile(__dirname + '/www' + req.path, req.body.html, function () {
    console.log('done');
  });
  res.send(200).end();
});

app.get('/test', function (req, res) {
  res.send({
    text: 'helloworld'
  });
});

app.get('/*', function (req, res) {
  res.sendfile(__dirname + '/www/index.html');
});
