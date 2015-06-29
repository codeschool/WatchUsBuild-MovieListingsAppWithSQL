'use strict';

describe('Controller: MoviesShowtimesCtrl', function () {

  // load the controller's module
  beforeEach(module('moviesApp'));

  var MoviesShowtimesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoviesShowtimesCtrl = $controller('MoviesShowtimesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
