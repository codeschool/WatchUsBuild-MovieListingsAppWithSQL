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

  // db.query(queryAllTheatres)
  mockData.theatres.all
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


  // db.query(queryOneTheatre, req.params.theatre, 'one')
  mockData.theatres.one
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

  // db.query(queryAllTheatresMovies, req.params.theatre)
  mockData.theatres.allMovies
    .then(function(movies) {

      // Moving up in scope
      allMovies = movies;

      // Array of promises
      var promises = [];

      // Loop through theatre
      allMovies.forEach(function(movie) {

        // Creates new promise, querying for showtimes
        var promise = db.query(queryAllTheatresMoviesShowtimes, [req.params.theatre, movie.id])
          .then(function(showtimes) {
            movie.showtimes = showtimes;
          });

        // Pushes to list of promises
        promises.push(promise);
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
