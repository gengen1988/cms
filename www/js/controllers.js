define([
  'angular',
  'tinymce'
], function (angular, tinymce) {
  var controllers = angular.module('app.controllers', []);

  var PAGE_COUNT = 5;

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

  controllers.controller('SectionController', ['$http', '$routeParams', function ($http, $routeParams) {
    var self = this;
    var url = '/api/sections/' + $routeParams.id;

    var pageNumber = this.pageNumber = $routeParams.page || 0;

    this.load = function () {
      $http.get(url).success(function (result) {
        console.log(result);
        self.title = result.name;
      });
      $http.get(url + '/articles', {
        params: {
          'filter[skip]': pageNumber * PAGE_COUNT,
          'filter[limit]': PAGE_COUNT
        }
      }).success(function (result) {
        console.log(result);
        self.articles = result;
      });
    };

    this.create = function () {
      $http.put('/api/articles', {
        name: '123',
        sectionId: $routeParams.id
      }).success(function (result) {
        self.articles.push(result);
      });
    };

    this.remove = function (id, index) {
      $http.delete('/api/articles/' + id).success(function (result) {
        console.log(result);
        self.articles.splice(index, 1);
      });
    };

    this.load();
  }]);

  controllers.controller('PaginationController', ['$location', '$http', '$routeParams', function ($location, $http, $routeParams) {
    var self = this;
    this.path = $location.path();
    this.currentPage = $routeParams.page || 0;

    this.load = function () {
      $http.get('/api/articles/count?where[sectionId]=' + $routeParams.id).success(function (result) {
        console.log(result.count / PAGE_COUNT);
        self.count = Math.ceil(result.count / PAGE_COUNT);
        self.pages = [];
        for (var i = 0; i < self.count; ++i) {
          self.pages.push({
            number: i
          });
        }
      });
    };

    this.load();
  }]);


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
      $http.put('/api/articles/' + $routeParams.id, {
        name: self.name
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
