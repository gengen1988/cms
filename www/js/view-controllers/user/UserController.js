define([
  'js/app-controllers'
], function (controllers) {
  controllers.controller('UserController', [
    'Employee',
    'LoopBackAuth',
    '$scope',
    '$location',
  function (User, LoopBackAuth, $scope, $location) {

    if (localStorage. !== '') {
      console.log('has value');
      $scope.hasLogin = true;
    };

    var saveUser = function (result) {
      console.log(result);
      LoopBackAuth.rememberMe = true;
      LoopBackAuth.setUser(result.id, result.userId);
      LoopBackAuth.save();

      localStorage.$cms$nickname =


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
      $scope.hasLogin = false;
      LoopBackAuth.rememberMe = true;
      LoopBackAuth.clearUser();
      LoopBackAuth.save();
    };

    $scope.signUp = function () {
      User.create($scope.credentials, $scope.signIn, signUpFail);
    };

    $scope.signIn = function () {
      User.login($scope.credentials, saveUser, signInFail);
    };

  }]);
});
