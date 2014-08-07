define([
  'js/app-controllers'
], function (controllers) {
  controllers.controller('UserAdminController', [
    'Employee',
    '$scope',
  function (Employee, $scope) {

    $scope.load = function () {
      Employee.find({}, function (results) {
        $scope.users = results;
      });
    };

    $scope.load();

  }]);
});
