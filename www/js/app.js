define([
  'lib/js/etframework',
  './view-controllers/index',
  './directives'
], function (etframework, controllers) {
  return angular.module('app', [
    etframework.name,
    controllers.name,
    'app.directives'
  ]);
});
