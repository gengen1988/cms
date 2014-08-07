define([
  'js/app-controllers'
], function (controllers) {
  console.log('load nav admin crtl');
  controllers.controller('NavAdminCtrl', [
    '$scope',
    'Navigation',
    function ($scope, Navigation) {

    $scope.add = function () {
      Navigation.create({
        name: '<未命名>'
      }, function () {
        $scope.load();
      });
    };

    $scope.remove = function (id) {
      Navigation.deleteById({
        id: id
      }, function () {
        $scope.load();
      });
    };

    $scope.load = function () {
      Navigation.find({}, function (result) {
        console.log(result);
        $scope.navs = result;
      });
    };

    $scope.load();

  }]);
});
