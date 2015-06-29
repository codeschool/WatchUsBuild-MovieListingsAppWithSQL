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
 * All thatres
 */
var allTheatres = new Promise(function(resolve) {

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

var oneTheatre = new Promise(function (resolve) {
  resolve({
    id: 1,
    name: 'Sample Theatre'
  });
});

module.exports = {
  movies: {
    all: allMovies,
    one: oneMovie
  },

  theatres: {
    all: allTheatres,
    one: oneTheatre
  },

  showtimes: {
    all: allShowtimes
  }
};
