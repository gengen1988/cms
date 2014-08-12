define([
  'js/app-controllers'
], function (controllers) {
  controllers.controller('ACtrl', function (Section, $scope) {
    $scope.heading = 'aaaaa';

    var load = function () {
      Section.find({
      }, function (result) {
        $scope.bbb = result;
      });
    };

    $scope.remove = function (item) {
      Section.deleteById({
        id: item.id
      }, function () {
        load();
      });
    };

    load();

  });
});
