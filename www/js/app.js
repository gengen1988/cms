define([
  'lib/js/etframework',
  './controllers',
  './directives'
], function (etframework) {
  return angular.module('app', [
    'etframework',
    'app.controllers',
    'app.directives'
  ]);
});
