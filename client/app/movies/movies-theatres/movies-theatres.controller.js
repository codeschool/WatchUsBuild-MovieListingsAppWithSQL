'use strict';

angular
  .module('moviesApp')
  .controller('MoviesTheatresCtrl', function (movie, theatres) {

    var vm = this;
    vm.movie = movie;
    vm.theatres = theatres;

  });
