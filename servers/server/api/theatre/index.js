'use strict';

var express = require('express');

var router = express.Router();

/**
 * Mock Data
 */
var mockData = require('../../data/mocks');

/**
 * Dynamic data
 */
var db = require('../../data/db');
var queryAllTheatres = 'SELECT t.id, t.name FROM theatres t';
var queryOneTheatre = 'SELECT t.id, t.name FROM theatres t WHERE id = ?';
var queryAllTheatresMovies = 'SELECT m.id, m.title FROM showtimes s INNER JOIN movies m ON s.movie_id = m.id WHERE s.theatre_id = ? GROUP BY s.movie_id';
var queryAllTheatresMoviesShowtimes = 'SELECT time FROM showtimes WHERE theatre_id = ? AND movie_id = ?';

router.get('/', function(req, res) {

  var promise;

  if (queryAllTheatres) {
    promise = db.query(queryAllTheatres);
  } else {
    promise = mockData.theatres.all;
  }

  promise
    .then(function(theatres) {
      res.json({
        data: theatres
      })
      .catch(function(err) {
        res.status(500).send({ error: err });
      });
    });

});

router.get('/:theatre', function(req, res) {

  var promise;

  if (queryAllTheatres) {
    promise = db.query(queryOneTheatre, req.params.theatre, 'one');
  } else {
    promise = mockData.theatres.one;
  }

  promise
    .then(function(theatre) {
      res.json({
        data: theatre
      });
    })
    .catch(function(err) {
      res.status(500).send({ error: err });
    });
});

router.get('/:theatre/movies', function(req, res) {

  var allMovies;
  var promise;

  if (queryAllTheatres) {
    promise = db.query(queryAllTheatresMovies, req.params.theatre)
  } else {
    promise = mockData.theatres.allMovies;
  }

  promise
    .then(function(movies) {

      // Moving up in scope
      allMovies = movies;

      // Array of promises
      var promises = [];

      // Loop through theatre
      allMovies.forEach(function(movie) {

        // Creates new promise, querying for showtimes
        var subPromise;

        console.log('movie', movie.id);

        if (queryAllTheatresMoviesShowtimes) {
          subPromise = db.query(queryAllTheatresMoviesShowtimes, [req.params.theatre, movie.id]);
        } else {
          subPromise = mockData.theatres.allMoviesShowtimes;
        }

        subPromise
          .then(function(showtimes) {
            movie.showtimes = showtimes;
          });

        // Pushes to list of promises
        promises.push(subPromise);
      });

      return Promise.all(promises);

    })

    .then(function() {
      res.json({
        data: allMovies
      });
    })
    .catch(function(err) {
      res.status(500).send({ error: err });
    });

});


module.exports = router;
