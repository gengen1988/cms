define([
  'angular',
  './user-routes',
  './admin-routes',
  './root-routes'
], function (angular, user, admin, root) {
  return angular.extend(root, admin, user);
});
