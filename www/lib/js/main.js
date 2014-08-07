require.config({
  baseUrl: '../../',
  paths: {
    'jquery': 'bower_components/jquery/dist/jquery',
    'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap',
    'angular': 'bower_components/angular/angular',
    'ngRoute': 'bower_components/angular-route/angular-route',
    'ngSanitize': 'bower_components/angular-sanitize/angular-sanitize',
    'ngResource': 'bower_components/angular-resource/angular-resource',
    'tinymce': 'bower_components/tinymce/tinymce',
    'ui.tinymce': 'bower_components/angular-ui-tinymce/src/tinymce',
    'ui.bootstrap': 'bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls',
    'lbServices': 'services/lb-services'
  },
  shim: {
    'angular': {exports: 'angular'},
    'tinymce': {exports: 'tinymce'},
    'bootstrap': ['jquery'],
    'ngRoute': ['angular'],
    'ngSanitize': ['angular'],
    'ngResource': ['angular'],
    'ui.tinymce': ['angular', 'tinymce'],
    'ui.bootstrap': ['angular'],
    'lbServices': ['angular']
  }
});

require(['js/app', 'lib/js/routes'], function (app) {
  app.config(function (paginationConfig) {
    paginationConfig.firstText = '首页';
    paginationConfig.previousText = '上一页';
    paginationConfig.nextText = '下一页';
    paginationConfig.lastText = '尾页';
  });
  angular.bootstrap(document, [app.name]);
});
