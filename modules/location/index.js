/*!
 * A CRUD-capable model.
 */
var loopback = require('loopback');
var properties = require('./properties');
var config = require('./config');
var location = loopback.Model.extend('location', properties, config);

if (config['data-source']) {
  location.attachTo(require('../' + config['data-source']));
}

module.exports = location;
