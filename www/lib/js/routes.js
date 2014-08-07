define([
  'lib/js/etframework',
  'routes/routes'
], function (etframework, routes) {
  etframework.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    Object.keys(routes).forEach(function (pattern) {
      $routeProvider.when(pattern, routes[pattern]);
    });
  }]);
});
