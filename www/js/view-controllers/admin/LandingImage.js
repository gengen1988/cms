define([
  'js/app-controllers'
], function (controllers) {
  controllers.controller('LandingImage', [
    '$scope',
  function ($scope) {

    function add() {
      $scope.breakingNews.push({
        id: 1,
        name: 'default'
      });
    }

    function remove(index) {
      $scope.breakingNews.splice(index, 1);
    }

    $scope.add = add;
    $scope.remove = remove;

  }]);
});
