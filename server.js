var fs = require('fs');
var app = require('./lib/app');
var storage = require('./lib/storage');

app.listen(1338, function () {
  console.log('storage started');
});

app.listen(1337, function () {
  console.log('app started');
  //open('http://localhost:1337');
});
