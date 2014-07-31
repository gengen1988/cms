define([
  'angular',
  'ngRoute',
  'ngSanitize',
  'ui.tinymce'
], function (angular) {
  return angular.module('etframework', ['ngRoute', 'ngSanitize', 'ui.tinymce']);
});
