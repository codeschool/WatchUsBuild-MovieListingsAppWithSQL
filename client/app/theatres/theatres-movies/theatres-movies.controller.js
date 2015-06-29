'use strict';

angular.module('moviesApp')
  .controller('TheatresMoviesCtrl', function TheatresMoviesCtrl(theatre, movies) {

    var vm = this;
    vm.theatre = theatre;
    vm.movies = movies;

  });
