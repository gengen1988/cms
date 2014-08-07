define([
  '../app-controllers'
], function (controllers) {

  controllers.controller('SectionController', [
    'Section',
    'Article',
    '$route',
    '$http',
    '$routeParams',
    function (Section, Article, $route, $http, $routeParams) {

    var self = this;
    var id = $routeParams.id;

    this.load = function (id) {
      Section.findById({
        id: id
      }, function (result) {
        self.title = result.name;
      });

      Article.find({
        filter: {
          where: {
            sectionId: id
          }
        }
      }, function (results) {
        console.log(results);
        self.articles = results;
      });
    };

    this.load(id);
  }]);

});
