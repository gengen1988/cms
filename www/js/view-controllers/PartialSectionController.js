define([
  '../app-controllers'
], function (controllers) {

  controllers.controller('PartialSectionCtrl', ['Section', 'Article', '$scope', function (Section, Article, $scope) {

    $scope.$watch('sectionId', function (val, origin) {
      if (!val) return;
      $scope.load(val);
    });

    $scope.load = function (id) {
      console.log(id);
      Section.findById({
        id: id
      }, function (result) {
        $scope.name = result.name;
      });

      Article.find({
        filter: {
          where: {
            sectionId: id
          },
          limit: 5
        }
      }, function (results) {
        $scope.articles = results;
      });
    };

  }]);

});
