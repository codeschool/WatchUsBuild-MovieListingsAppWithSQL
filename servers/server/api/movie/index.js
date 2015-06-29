/* jshint unused: false */
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
var queryAllMovies = 'SELECT m.id, m.title, ( SELECT COUNT(DISTINCT theatre_id) FROM showtimes WHERE movie_id = m.id ) as theatresCount FROM movies m;';
var queryOneMovie = 'SELECT m.id, m.title FROM movies m WHERE id = ?';
var queryAllTheatres = 'SELECT t.id, t.name, ( SELECT count(*) FROM showtimes WHERE theatre_id = t.id AND movie_id = s.movie_id ) as showtimesCount FROM theatres t LEFT JOIN showtimes s ON s.theatre_id = t.id WHERE s.movie_id = ? GROUP BY t.id';
var queryAllShowtimes = 'SELECT s.time FROM showtimes s WHERE movie_id = ? AND theatre_id = ?;';


/**
 * Retuns list of all movies
 */
router.get('', function(req, res) {

  // db.query(queryAllMovies)
  mockData.movies.all
    .then(function(movies) {
      res.json({
        data: movies
      });
    })
    .catch(function(err) {
      res.status(500).send({error: err});
    });

});

/**
 * Returns single movie
 */
router.get('/:movie', function(req, res) {

  // db.query(queryOneMovie, req.params.movie, 'one')
  mockData.movies.one
    .then(function(movie) {
      res.json({
        data: movie
      });
    })
    .catch(function(err) {
      res.status(500).send({ error: err });
    });

});

/**
 * Returns list of theatres associated with a movie
 */
router.get('/:movie/theatres', function(req, res) {

  // db.query(queryAllTheatres, req.params.movie)
  mockData.movies.allTheatres
    .then(function(theatres) {
      res.json({
        data: theatres
      });
    })
    .catch(function(err) {
      res.status(500).send({ error: err });
    });

});

/**
 * Returns list of show times for a movie and theatre
 */
router.get('/:movie/theatres/:theatre', function(req, res) {

  // db.query(queryAllShowtimes, [ req.params.movie, req.params.theatre ])
  mockData.showtimes.all
    .then(function(showtimes) {
      res.json({
        data: showtimes
      });
    })
    .catch(function(err) {
      res.status(500).send({ error: err });
    });

});

module.exports = router;
