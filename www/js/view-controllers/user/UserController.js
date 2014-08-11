define([
  'js/app-controllers'
], function (controllers) {
  controllers.controller('UserController', [
    'Employee',
    'LoopBackAuth',
    '$scope',
    '$location',
    '$rootScope',
  function (User, LoopBackAuth, $scope, $location, $rootScope) {

    var loadUser = function () {
      $scope.hasLogin = localStorage.hasLogin;
      $scope.nickname = localStorage.nickname;
      $rootScope.isAdmin = localStorage.isAdmin;
    };

    var saveUser = function (user) {
      $scope.hasLogin = localStorage.hasLogin = true;
      $scope.nickname = localStorage.nickname = user.nickname || user.username;
    };

    var clearUser = function () {
      $scope.hasLogin = localStorage.hasLogin = false;
      $scope.nickname = localStorage.nickname = '';
      $rootScope.isAdmin = localStorage.isAdmin = false;
    };

    var signInSuccess = function (result) {
      console.log(result);
      LoopBackAuth.rememberMe = true;
      LoopBackAuth.setUser(result.id, result.userId);
      LoopBackAuth.save();

      saveUser(result.user);

      User.find({}, function () {
        console.log('admin');
        $rootScope.isAdmin = localStorage.isAdmin = true;
      });

      $location.path('/');
    };

    var signInFail = function (result) {
      console.log(result);
    };

    var signUpFail = function (result) {
      console.log(result);
    };

    $scope.signOut = function () {
      console.log('signout');
      LoopBackAuth.rememberMe = true;
      LoopBackAuth.clearUser();
      LoopBackAuth.save();

      clearUser();
    };

    $scope.signUp = function () {
      User.create($scope.credentials, $scope.signIn, signUpFail);
    };

    $scope.signIn = function () {
      User.login($scope.credentials, signInSuccess, signInFail);
    };

    loadUser();

  }]);
});
