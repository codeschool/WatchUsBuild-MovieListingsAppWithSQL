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
var queryAllMovies = 'SELECT m.id, m.title, COUNT(DISTINCT s.theatre_id) as theatresCount FROM movies m LEFT OUTER JOIN showtimes s ON m.id = s.movie_id GROUP BY s.movie_id ORDER BY theatresCount DESC';
var queryOneMovie = 'SELECT title FROM movies WHERE id = ?;';
var queryAllTheatres = 'SELECT s.time, t.name FROM showtimes s INNER JOIN theatres t ON t.id = s.theatre_id WHERE s.movie_id = ? ORDER BY t.name';


/**
 * Retuns list of all movies
 */
router.get('/', function(req, res) {

  var promise;

  if (queryAllMovies) {
    promise = db.query(queryAllMovies);
  } else {
    promise = mockData.movies.all;
  }

  promise
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

  var promise;

  if (queryOneMovie) {
    promise = db.query(queryOneMovie, req.params.movie, 'one');
  } else {
    promise = mockData.movies.one;
  }

  promise
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

  var promise;

  if (queryAllTheatres) {
    promise = db.query(queryAllTheatres, req.params.movie);
  } else {
    promise = mockData.movies.allTheatres;
  }

  var allTheatres = [];

  promise
    .then(function(theatres) {

      var prevTheatre;
      var currentTheatreIndex;

      theatres.forEach(function(theatre) {

        if (!(prevTheatre && prevTheatre.name === theatre.name)) {

          currentTheatreIndex = allTheatres.length

          // different
          allTheatres.push({
            id: theatre.id,
            name: theatre.name,
            showtimes: []
          });

        }

        allTheatres[currentTheatreIndex].showtimes.push({
          time: theatre.time
        });

        prevTheatre = theatre;

      });

      res.json({
        data: allTheatres
      });
    })
    .catch(function(err) {
      res.status(500).send({ error: err });
    });

});

module.exports = router;
