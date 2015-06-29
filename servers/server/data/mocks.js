'use strict';

/**
 * All movies
 */
var allMovies = new Promise(function(resolve) {

  resolve([
    {
      id: 1,
      title: 'Sample Movie',
      theatresCount: 7,
    },
    {
      id: 1,
      title: 'Sample Movie',
      theatresCount: 7,
    },
    {
      id: 1,
      title: 'Sample Movie',
      theatresCount: 7,
    },
    {
      id: 1,
      title: 'Sample Movie',
      theatresCount: 7,
    },
    {
      id: 1,
      title: 'Sample Movie',
      theatresCount: 7,
    },
    {
      id: 1,
      title: 'Sample Movie',
      theatresCount: 7,
    },
    {
      id: 1,
      title: 'Sample Movie',
      theatresCount: 7
    }
  ]);

});

/**
 * One movie
 */
var oneMovie = new Promise(function (resolve) {

  resolve({
    id: 1,
    title: 'Sample Movie'
  });

});

/**
 * All theatres
 */
var allTheatres = new Promise(function(resolve) {

  resolve([
    {
      id: 1,
      name: 'Sample Theatre'
    },
    {
      id: 1,
      name: 'Sample Theatre'
    },
    {
      id: 1,
      name: 'Sample Theatre'
    },
    {
      id: 1,
      name: 'Sample Theatre'
    },
    {
      id: 1,
      name: 'Sample Theatre'
    },
    {
      id: 1,
      name: 'Sample Theatre'
    },
    {
      id: 1,
      name: 'Sample Theatre'
    }
  ]);

});

/**
 * All movie theatres
 */
var allMovieTheatres = new Promise(function(resolve) {

  resolve([
    {
      id: 1,
      name: 'Sample Theatre',
      showtimesCount: 4
    },
    {
      id: 1,
      name: 'Sample Theatre',
      showtimesCount: 4
    },
    {
      id: 1,
      name: 'Sample Theatre',
      showtimesCount: 4
    },
    {
      id: 1,
      name: 'Sample Theatre',
      showtimesCount: 4
    },
    {
      id: 1,
      name: 'Sample Theatre',
      showtimesCount: 4
    },
    {
      id: 1,
      name: 'Sample Theatre',
      showtimesCount: 4
    },
    {
      id: 1,
      name: 'Sample Theatre',
      showtimesCount: 4
    }
  ]);

});

var allShowtimes = new Promise(function(resolve) {

  resolve([
    {
      time: '3:00 PM'
    },
    {
      time: '3:00 PM'
    },
    {
      time: '3:00 PM'
    },
    {
      time: '3:00 PM'
    }
  ]);

});

/**
 * All theatre movies
 */
var allTheatreMovies = new Promise(function(resolve) {

  resolve([
    {
      id: 1,
      title: 'Sample Movie',
      showtimes: [
        '11:00 AM',
        '2:00 PM',
        '5:00 PM'
      ]
    },
    {
      id: 1,
      title: 'Sample Movie',
      showtimes: [
        '11:00 AM',
        '2:00 PM',
        '5:00 PM'
      ]
    },
    {
      id: 1,
      title: 'Sample Movie',
      showtimes: [
        '11:00 AM',
        '2:00 PM',
        '5:00 PM'
      ]
    },
    {
      id: 1,
      title: 'Sample Movie',
      showtimes: [
        '11:00 AM',
        '2:00 PM',
        '5:00 PM'
      ]
    },
    {
      id: 1,
      title: 'Sample Movie',
      showtimes: [
        '11:00 AM',
        '2:00 PM',
        '5:00 PM'
      ]
    },
    {
      id: 1,
      title: 'Sample Movie',
      showtimes: [
        '11:00 AM',
        '2:00 PM',
        '5:00 PM'
      ]
    },
    {
      id: 1,
      title: 'Sample Movie',
      showtimes: [
        '11:00 AM',
        '2:00 PM',
        '5:00 PM'
      ]
    }
  ]);

});

var oneTheatre = new Promise(function (resolve) {
  resolve({
    id: 1,
    name: 'Sample Theatre'
  });
});

module.exports = {
  movies: {
    all: allMovies,
    one: oneMovie,
    allTheatres: allMovieTheatres
  },

  theatres: {
    all: allTheatres,
    one: oneTheatre,
    allMovies: allTheatreMovies
  },

  showtimes: {
    all: allShowtimes
  }
};
