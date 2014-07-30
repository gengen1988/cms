define(function () {
  return {
    '/': {
      templateUrl: 'views/root.html'
    },
    '/products': {
      templateUrl: 'views/products.html',
      controller: 'SectionController',
      controllerAs: 'section'
    },
    '/article/:id': {
      templateUrl: 'views/article.html',
      controller: 'ArticleController',
      controllerAs: 'article'
    },
    '/admin/article/:id': {
      templateUrl: 'views/admin/article.html',
      controller: 'EditorController',
      controllerAs: 'editor'
    }
  }
});
