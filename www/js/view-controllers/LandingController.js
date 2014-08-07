define([
  '../app-controllers'
], function (controllers) {

  controllers.controller('LandingCtrl', ['LandingPage', '$scope', function (LandingPage, $scope) {

    $scope.load = function () {
      LandingPage.findById({
        id: 1
      }, function (result) {
        $scope.section1 = result.section1;
        $scope.section2 = result.section2;
        $scope.section3 = result.section3;
      })
    };

    $scope.save = function () {
      LandingPage.upsert({
        id: 1,
        section1: $scope.section1,
        section2: $scope.section2,
        section3: $scope.section3
      });
      history.back();
    };

    $scope.load();

  }]);
});
