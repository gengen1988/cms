define([
  'js/app-controllers'
], function (controllers) {
  controllers.controller('NavCtrl', [
    'Navigation',
    '$scope',
    function (Navigation, $scope) {
    $scope.load = function () {
      Navigation.find({}, function (results) {
        $scope.navs = results;
      });
    };

    $scope.load();
  }]);
});
