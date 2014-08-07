define([
  'js/app-controllers'
], function (controllers) {

  controllers.controller('NavAdminDetailCtrl', [
    'Navigation',
    '$routeParams',
    '$scope',
    function (Navigation, $routeParams, $scope) {

    var id = $routeParams.id;

    $scope.load = function (id) {
      Navigation.findById({
        id: id
      }, function (result) {
        console.log(result);

        $scope.name = result.name;
        $scope.link = result.link;
      });
    };

    $scope.save = function () {
      Navigation.upsert({
        id: id,
        name: $scope.name,
        link: $scope.link
      }, function () {
        history.back();
      });
    };

    $scope.load(id);
  }]);

  console.log('detail loaded');
});
