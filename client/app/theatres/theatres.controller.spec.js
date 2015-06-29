'use strict';

describe('Controller: TheatresCtrl', function () {

  // load the controller's module
  beforeEach(module('moviesApp'));

  var TheatresCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TheatresCtrl = $controller('TheatresCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
