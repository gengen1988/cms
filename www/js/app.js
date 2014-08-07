define([
  'lib/js/etframework',
  './view-controllers/index',
  './directives'
], function (etframework, controllers) {
  var app = angular.module('app', [
    etframework.name,
    controllers.name,
    'app.directives'
  ]);

  return app;
});
