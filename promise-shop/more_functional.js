var http = require('q-io/http');
var _ = require('lodash');
var dbPath = _.bind(String.prototype.concat, "http://localhost:7071");
http.read("http://localhost:7000")
.then(_.compose(http.read, "http://localhost:7071"))
.then(_.compose(console.log, JSON.parse))
.then(null, console.error)
.done();