define([
  'angular',
  'tinymce'
], function (angular, tinymce) {
  var controllers = angular.module('app.controllers', []);

  var articles = [{
    title: '集团公司李慧镝副总裁莅临我院宣布主要负责人调整',
    link: 'article/123',
    updateDate: Date.now()
  }, {
    title: '我院自主研发并总包的绿色数据中心获年度数据中心设计AAAA等级认',
    link: 'article/123',
    updateDate: Date.now()
  }, {
    title: '我院积极支撑中国移动（重庆）最大数据中心建设',
    link: 'article/123',
    updateDate: Date.now()
  }];

  controllers.controller('SectionController', [function () {
    this.title = '公司新闻';
    this.articles = articles;
  }]);

  controllers.controller('ArticleController', ['$routeParams', '$scope', function ($routeParams) {
    var id = $routeParams.id;
    this.title = '集团公司李慧镝副总裁莅临我院宣布主要负责人调整';
    this.updateDate = Date.now();

    this.content = 'storage/123.html?cache=' + Date.now();
  }]);

  controllers.controller('EditorController', ['$http', '$routeParams', '$scope', function ($http, $routeParams, $scope) {
    var self = this;

    var path = 'storage/' + $routeParams.id + '.html';

    this.options = {
      content_css: '/bower_components/bootstrap/dist/css/bootstrap.css',
      plugins: 'code image preview autoresize',
      menubar: false,
      statusbar: false,
      toolbar: 'undo redo | code preview | bold italic underline | alignleft aligncenter alignright | image'
    };

    this.save = function () {
      $http.put(path, {
        html: self.html
      }).success(function (result) {
        console.log($scope);
        history.back();
      });
    };

    this.load = function () {
      $http.get(path).success(function (result) {
        self.html = result;
      });
    };

    this.load();
  }]);

  controllers.controller('ManagerController', ['$routeParams', '$http', function ($routeParams, $http) {
    this.load = function () {
      $http.get('test', {
        params: {
          id: $routeParams.id  
        }
      }).success(function (result) {
        console.log(result);
      });
    };

    this.load();
  }]);

  return controllers;
});
