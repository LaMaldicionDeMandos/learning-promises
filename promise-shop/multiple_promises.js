var q = require('q');
var defer1 = q.defer();
var defer2 = q.defer();

function all(promise1, promise2) {
	var counter = 0;
	var val1;
	var val2;
	var def = q.defer();
	promise1.then(function(result) {
		val1 = result;
		counter++;
		if(counter >= 2) def.resolve([val1, val2]);
	}).then(null, def.reject).done();
	promise2.then(function(result) {
		val2 = result;
		counter++;
		if(counter >= 2) def.resolve([val1, val2]);
	}).then(null, def.reject)
	.done();
	return def.promise;
};

all(defer1.promise, defer2.promise).then(console.log).done();

setTimeout(function () {
  defer1.resolve("PROMISES");
  defer2.resolve("FTW");
}, 200);

