var q = require('q');
//GENERO UNA FUNCION QASYNCRONICA Y LA WRAPEO EN UN PROMISE, MANEJA ERRORES
//q.fcall(function() {
//	return JSON.parse(process.argv[2]);
//}).then(console.log).then(null, console.log);

//Los proximos argumentos son los parametros de la funcion
//q.fcall(function(json) {
//	return JSON.parse(json);
//}, process.argv[2]).then(console.log).then(null, console.log);

//Puedo pasar una funcion cualquiera
q.fcall(JSON.parse, process.argv[2]).then(console.log).then(null, console.log);