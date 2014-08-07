define([
  'js/app-controllers'
], function (controllers) {

  controllers.controller('ManagerController', [
    'paginationConfig',
    'Section',
    'Article',
    '$location',
    '$routeParams',
    function (paginationConfig, Section, Article, $location, $routeParams) {

    var self = this;
    var currentPage = this.currentPage = $routeParams.page || 1;

    this.remove = function (id) {
      Section.deleteById({
        id: id
      }, function (result) {
        console.log(result);
        self.load(currentPage);
      });
    };

    this.load = function (page) {
      Section.count(function (result) {
        self.totalItems = result.count;
      });

      Section.find({
        filter: {
          offset: (self.currentPage - 1) * paginationConfig.itemsPerPage,
          limit: paginationConfig.itemsPerPage
        }
      }, function (results, header) {
        self.items = results;
      });
    };

    this.add = function () {
      Section.create({
        name: '<未命名>'
      }, function () {
        self.load(self.currentPage);
      });
    };

    this.load(currentPage);
  }]);
});
