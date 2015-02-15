var http = require('q-io/http');
var promise = http.read('http://localhost:1337');
promise.then(function(json) {
	console.log(JSON.parse(json));
});