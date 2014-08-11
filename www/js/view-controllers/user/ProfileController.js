define([
  'js/app-controllers'
], function (controllers) {
  controllers.controller('ProfileController', [
    '$scope',
    '$http',
  function ($scope, $http) {

    $scope.change = function (file) {
      var formData = new FormData();
      formData.append('avatar', file);
      $http.post('/storage/upload', formData, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      }).success(function (result) {
        console.log(result);
        $scope.avatar = 'storage/' + file.name;
      });
    };

  }]);
});
