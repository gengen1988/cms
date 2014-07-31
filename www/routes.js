define(function () {
  return {
    '/': {
      templateUrl: 'views/root.html'
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
    '/admin/folder/:id': {
      templateUrl: 'views/admin/manage.html',
      controller: 'ManagerController',
      controllerAs: 'manager'
    }
  }
});
