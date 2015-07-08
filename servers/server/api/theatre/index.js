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
var queryAllTheatres = 'SELECT id, name FROM theatres';
var queryOneTheatre = 'SELECT id, name FROM theatres WHERE id = ?;';
var queryAllTheatresMovies = 'SELECT s.time, m.title FROM showtimes s INNER JOIN movies m ON m.id = s.movie_id WHERE s.theatre_id = ? ORDER BY m.title;';

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

  if (queryOneTheatre) {
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

  var allMovies = [];
  var promise;

  if (queryAllTheatresMovies) {
    promise = db.query(queryAllTheatresMovies, req.params.theatre)
  } else {
    promise = mockData.theatres.allMovies;
  }

  promise
    .then(function(movies) {

      var prevMovie;
      var currentMovieIndex;

      movies.forEach(function(movie) {

        if (!(prevMovie && prevMovie.title === movie.title)) {

          currentMovieIndex = allMovies.length;

          // different
          allMovies.push({
            title: movie.title,
            showtimes: []
          });

        }

        allMovies[currentMovieIndex].showtimes.push({
          time: movie.time
        });

        prevMovie = movie;

      });

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
