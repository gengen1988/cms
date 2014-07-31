var express = require('express');
var path = require('path');
var app = module.exports = express();

app.use(express.static(path.resolve(__dirname + '/../storage')));

app.put('/storage/*', function (req, res) {
  console.log(__dirname + req.path);
  fs.writeFile(__dirname + '/www' + req.path, req.body.html, function () {
    console.log('done');
  });
  res.send(200).end();
});
