'use strict';

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(__dirname + '/sql2sql-stb.sqlite');


exports.query = function query(sqlQuery, params, action) {

  // DB Promise...
  var dbPromise = new Promise(function(resolve, reject) {

    // Stop right here if query is empty (db driver breaks otherwise)
    if (!sqlQuery) {
      return reject('We need a SQL query before proceeding');
    }

    // Once sqlite file is read, callback gets executed
    db.serialize(function() {

      // For demo purposes, discards params if sqlQuery has no dynamic clauses
      if (params && !/\?/.test(sqlQuery)) {
        params = undefined;
      }

      // Executes query, calling either `each` or `all` function
      db[ (action === 'one') ? 'each' : 'all' ](sqlQuery, params, function(err, res) {

        // Rejects promise if error happened
        if (err) {
          return reject(err);
        }

        // Resolves list of movies
        resolve(res);

      });

    });

  });

  return dbPromise;

};
