'use strict';

angular
  .module('moviesApp')
  .controller('TheatresCtrl', function TheatresCtrl(theatres) {

    var vm = this;
    vm.theatres = theatres;

  });
