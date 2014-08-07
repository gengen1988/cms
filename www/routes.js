define(function () {
  return {
    '/': {
      templateUrl: 'views/root.html',
      controller: 'RootCtrl'
    },
    '/test': {
      templateUrl: 'views/test.html',
      controller: 'PaginationDemoCtrl'
    },
    '/sections/:id': {
      templateUrl: 'views/section.html',
      controller: 'SectionController',
      controllerAs: 'section'
    },
    '/articles/:id': {
      templateUrl: 'views/article.html',
      controller: 'ArticleController',
      controllerAs: 'article',
      reloadOnSearch: true
    },
    '/admin/articles/:id': {
      templateUrl: 'views/admin/article.html',
      controller: 'EditorController',
      controllerAs: 'editor'
    },
    '/admin/sections': {
      templateUrl: 'views/admin/manage.html',
      controller: 'ManagerController',
      controllerAs: 'manager'
    },
    '/admin/sections/:id/articles': {
      templateUrl: 'views/admin/manager2.html',
      controller: 'Manager2Controller',
      controllerAs: 'manager2'
    },
    '/admin/navigations': {
      templateUrl: 'views/admin/navigation.html',
      controller: 'NavAdminCtrl'
    },
    '/admin/navigations/:id': {
      templateUrl: 'views/admin/navigation-detail.html',
      controller: 'NavAdminDetailCtrl'
    },
    '/admin': {
      templateUrl: 'views/admin/dashboard.html'
    },
    '/admin/landing': {
      templateUrl: 'views/admin/landing.html',
      controller: 'LandingCtrl'
    },
    '/admin/system': {
      templateUrl: 'views/admin/system.html'
    }
  }
});
