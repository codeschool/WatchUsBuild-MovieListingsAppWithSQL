'use strict';

angular
  .module('moviesApp')
  .controller('MoviesShowtimesCtrl', function MoviesShowtimesCtrl(movie, theatre, showtimes) {

    var vm = this;
    vm.movie = movie;
    vm.theatre = theatre;
    vm.showtimes = showtimes;

  });
