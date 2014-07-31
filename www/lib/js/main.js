require.config({
  baseUrl: '../../',
  paths: {
    'jquery': 'bower_components/jquery/dist/jquery',
    'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap',
    'angular': 'bower_components/angular/angular',
    'ngRoute': 'bower_components/angular-route/angular-route',
    'ngSanitize': 'bower_components/angular-sanitize/angular-sanitize',
    'tinymce': 'bower_components/tinymce/tinymce',
    'ui.tinymce': 'bower_components/angular-ui-tinymce/src/tinymce'
  },
  shim: {
    'angular': {exports: 'angular'},
    'ngRoute': ['angular'],
    'ngSanitize': ['angular'],
    'tinymce': {exports: 'tinymce'},
    'ui.tinymce': ['angular', 'tinymce'],
    'bootstrap': ['jquery']
  }
});

require(['js/app', 'lib/js/routes'], function (app) {
  angular.bootstrap(document, [app.name]);
});
