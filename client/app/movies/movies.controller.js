'use strict';

angular
  .module('moviesApp')
  .controller('MoviesCtrl', function MoviesCtrl(movies) {

    var vm = this;
    vm.movies = movies;

  });
