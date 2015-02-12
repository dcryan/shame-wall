'use strict';

angular.module('shameWallApp')
.controller('CalendarCtrl', function ($scope, $modal, $log) {

	$scope.open = function ()
	{
		var modalInstance = $modal.open({
			templateUrl: 'app/calendar/add-workout-form.html'
		});
	};
});
