var express = require('express');
var app = express();

app.listen(1337);

app.use(express.static(__dirname + '/www'));

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

app.get('/*', function (req, res) {
  res.sendfile(__dirname + '/www/index.html');
});
