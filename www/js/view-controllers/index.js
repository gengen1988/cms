define([
  '../app-controllers',

  './root/ArticleController',
  './root/RootController',
  './root/SectionController',
  './root/NavigationController',

  './admin/EditorController',
  './admin/LandingController',
  './admin/ManagerController',
  './admin/Manager2Controller',
  './admin/NavigationAdminController',
  './admin/NavAdminDetailCtrl',
  './admin/UserAdminController',

  './user/UserController',
  './user/ProfileController',

  './PartialSectionController'

], function (controllers) {
  return controllers;
});
