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

  controllers.controller('ArticleController', ['$routeParams', function ($routeParams) {
    var id = $routeParams.id;
    this.title = '集团公司李慧镝副总裁莅临我院宣布主要负责人调整';
    this.updateDate = Date.now();
    this.content = 'storage/123.html'
  }]);

  controllers.controller('EditorController', [function () {
    tinymce.init({
      selector: '.editor',
      content_css: '/less/editor.css',
      plugins: 'code image preview autoresize',
      menubar: false,
      statusbar: false,
      toolbar: 'undo redo | code preview | bold italic underline | alignleft aligncenter alignright | image'
    });
  }]);

  return controllers;
});
