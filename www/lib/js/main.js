require.config({
  baseUrl: '../../',
  paths: {
    jquery: 'bower_components/jquery/dist/jquery',
    bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
    angular: 'bower_components/angular/angular',
    angularRoute: 'bower_components/angular-route/angular-route',
    tinymce: 'bower_components/tinymce/tinymce'
  },
  shim: {
    angular: {exports: 'angular'},
    angularRoute: ['angular'],
    bootstrap: ['jquery'],
    tinymce: {exports: 'tinymce'}
  }
});

require(['js/app', 'lib/js/routes'], function (app) {
  angular.bootstrap(document, [app.name]);
});
