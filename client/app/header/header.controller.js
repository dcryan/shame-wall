'use strict';

angular.module('shameWallApp')
  .controller('HeaderCtrl', function ($scope, $modal) {
    $scope.openAddWorkout = function ()
	{
		$modal.open({
			templateUrl: 'app/common/views/add-workout-form.html',
			scope: $scope
		});
	};
  });
