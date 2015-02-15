var http = require('q-io/http');
var promise = http.read('http://localhost:7000');
promise.then(function(st) {
	var result = http.read('http://localhost:7001/' + st.toString());
	result.then(function(st) {
		return JSON.parse(st.toString());
	}).then(console.log).done();
});