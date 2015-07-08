'use strict';

angular.module('moviesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('movies', {
        url: '/movies',
        templateUrl: 'app/movies/movies.html',
        controller: 'MoviesCtrl as vm',
        resolve: {
            movies: function(Restangular) {
              return Restangular
                .all('movies')
                .getList();
            }
          }
      })
      .state('movies_theatres', {
          url: '/movies/:movie/theatres',
          controller: 'MoviesTheatresCtrl',
          controllerAs: 'vm',
          templateUrl: 'app/movies/movies-theatres/movies-theatres.html',
          resolve: {
            movie: function($stateParams, Restangular) {
              return Restangular
                .one('movies', $stateParams.movie)
                .get();
            },

            theatres: function($stateParams, Restangular) {
              return Restangular.one('movies', $stateParams.movie)
                .all('theatres')
                .getList();
            }
          }
        });
  });
