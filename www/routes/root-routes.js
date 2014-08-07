define([], function () {
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
    }
  };
});
