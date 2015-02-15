'use strict';

angular.module('shameWallApp')
  .controller('NavbarCtrl', function ($scope, $location, $modal, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Calendar',
      'link': '/calendar'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.openAddWorkout = function ()
    {
      $modal.open({
        templateUrl: 'app/common/views/add-workout-form.html',
        scope: $scope
      });
    };
  });