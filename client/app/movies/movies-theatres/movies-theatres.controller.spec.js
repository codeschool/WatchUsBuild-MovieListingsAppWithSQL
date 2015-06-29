'use strict';

describe('Controller: MoviesTheatresCtrl', function () {

  // load the controller's module
  beforeEach(module('moviesApp'));

  var MoviesTheatresCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoviesTheatresCtrl = $controller('MoviesTheatresCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
