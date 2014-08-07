define([
  'js/app-controllers'
], function (controllers) {
  controllers.controller('RootCtrl', ['LandingPage', '$scope', function (LandingPage, $scope) {

    $scope.load = function () {
      LandingPage.findById({
        id: 1
      }, function (result) {
        $scope.section1 = result.section1;
        $scope.section2 = result.section2;
        $scope.section3 = result.section3;
      });
    };

    $scope.load();

  }]);
});
