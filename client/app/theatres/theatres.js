'use strict';

angular.module('moviesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('theatres', {
        url: '/theatres',
        templateUrl: 'app/theatres/theatres.html',
        controller: 'TheatresCtrl as vm',
        resolve: {
          theatres: function(Restangular) {
            return Restangular
              .all('theatres')
              .getList();
          }
        }
      })
      .state('theatres_movies', {
        url: '/theatres/:theatre/movies',
        templateUrl: 'app/theatres/theatres-movies/theatres-movies.html',
        controller: 'TheatresMoviesCtrl as vm',
        resolve: {
          theatre: function($stateParams, Restangular) {
            return Restangular
              .one('theatres', $stateParams.theatre)
              .get();
          },

          movies: function($stateParams, Restangular) {
            return Restangular
              .one('theatres', $stateParams.theatre)
              .all('movies')
              .getList();
          }
        }
      });
  });
