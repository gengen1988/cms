define([
  'js/app-controllers'
], function (controllers) {

  controllers.controller('Manager2Controller', [
    'Article',
    'Section',
    '$routeParams',
    function (Article, Section, $routeParams) {

    var self = this;
    var id = this.id = $routeParams.id;
    var page = this.page = $routeParams.page;

    this.add = function () {
      console.log('create');
      Article.create({
        name: '<unknown>',
        sectionId: id
      }, function () {
        self.load(id, page);
      });
    };

    this.load = function (id, page) {
      Section.findById({
        id: id
      }, function (result) {
        self.name = result.name;
      });

      Article.count({
        where: {
          sectionId: id
        }
      }, function (result) {
        console.log(result.count);
        self.totalCount = result.count;
      });

      Article.find({
        filter: {
          where: {
            sectionId: id
          },
          //offset: 0,
          //limit: 4
        }
      }, function (results) {
        self.items = results;
      });
    };

    this.remove = function (articleId) {
      console.log('aaaa');
      Article.deleteById({
        id: articleId
      }, function () {
        self.load(id, page);
      });
    };

    this.save = function () {
      console.log('save');
      Section.upsert({}, {
        id: id,
        name: self.name
      }, function (result) {
        console.log(result);
      });
    };

    this.load(id, page);

  }]);

});
