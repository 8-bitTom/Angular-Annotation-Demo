'use strict';

var mongoose = require('mongoose'),
    Sample = mongoose.model('Sample');

/**
 * Get awesome things
 */
exports.samples = function(req, res) {
  return Sample.find(function (err, samples) {
    if (!err) {
      return res.json(samples);
    } else {
      return res.send(err);
    }
  });
};