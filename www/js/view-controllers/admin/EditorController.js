define([
  'js/app-controllers'
], function (controllers) {

  controllers.controller('EditorController', [
    'Article',
    '$http',
    '$routeParams',
    '$scope',
    function (Article, $http, $routeParams, $scope) {

    var self = this;

    var path = 'storage/' + $routeParams.id + '.html';

    this.options = {
      content_css: '/bower_components/bootstrap/dist/css/bootstrap.css',
      language_url: '/lib/i18n/zh_CN.js',
      plugins: 'code image preview autoresize',
      menubar: false,
      statusbar: false,
      toolbar: 'undo redo | code preview | bold italic underline | alignleft aligncenter alignright | image'
    };

    this.save = function () {
      Article.upsert({
        id: $routeParams.id,
        name: self.name,
        timestamp: Date.now()
      });

      $http.put(path, {
        html: self.html
      }).success(function (result) {
        console.log($scope);
        history.back();
      });
    };

    this.load = function () {
      $http.get('/api/articles/' + $routeParams.id).success(function (result) {
        self.name = result.name;
      });
      $http.get(path).success(function (result) {
        self.html = result;
      });
    };

    this.load();
  }]);
});
