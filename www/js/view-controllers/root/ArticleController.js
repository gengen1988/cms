define([
  'js/app-controllers'
], function (controllers) {

  controllers.controller('ArticleController', ['$http', '$routeParams', function ($http, $routeParams) {
    var id = this.id = $routeParams.id;
    var self = this;
    this.updateDate = Date.now();

    this.content = 'storage/' + id + '.html?cache=' + Date.now();

    console.log(this.content);

    this.load = function () {
      $http.get('/api/articles/' + $routeParams.id).success(function (result) {
        self.name = result.name;
      });
    };

    this.load();
  }]);

});
