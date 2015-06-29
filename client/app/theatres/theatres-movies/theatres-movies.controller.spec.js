'use strict';

describe('Controller: TheatresMoviesCtrl', function () {

  // load the controller's module
  beforeEach(module('moviesApp'));

  var TheatresMoviesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TheatresMoviesCtrl = $controller('TheatresMoviesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
