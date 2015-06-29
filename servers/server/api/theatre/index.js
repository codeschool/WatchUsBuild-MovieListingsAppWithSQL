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
var queryOneTheatre = 'SELECT t.id, t.name FROM theatres t WHERE id = ?';


router.get('/:theatre', function(req, res) {


  // db.query(queryOneTheatre, req.params.theatre, 'one')
  mockData.theatres.one
    .then(function(theatre) {
      console.log('theatre', theatre);
      res.json({
        data: theatre
      });
    })
    .catch(function(err) {
      res.status(500).send({ error: err });
    });
});

module.exports = router;
