var q = require('q');
var parsePromised = function(){
	var defer = q.defer();
	setTimeout(function() {
		var json;
		try {
			json = JSON.parse(process.argv[2]);
		} catch(e) {
			defer.reject(e);	
		}
		defer.resolve(json);
	}, 300);
	return defer.promise;
};
parsePromised().then(console.log).then(null, console.log);