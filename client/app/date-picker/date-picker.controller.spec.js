'use strict';

describe('Controller: DatePickerCtrl', function () {

  // load the controller's module
  beforeEach(module('shameWallApp'));

  var DatePickerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatePickerCtrl = $controller('DatePickerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
