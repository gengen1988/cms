define([
  'angular'
], function (angular) {
  var directives = angular.module('app.directives', []);

  directives.directive('pagination', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/pagination.html'
    }
  });

  directives.directive('appHeader', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/header.html',
    };
  });

  directives.directive('appFooter', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/footer.html'
    };
  });

  directives.directive('appNavbar', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/navbar.html'
    };
  });

  directives.directive('appBanner', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/banner.html'
    };
  });

  directives.directive('adminHeader', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/admin/header.html'
    }
  });

  return directives;
});
