
const http = require('http');

http.createServer((request, response) => {
	//response.writeHead(200, {'Content-Type' : 'application/json'});
	// response.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
	// response.writeHead(200, {'Content-Type' : 'application/csv'});

	// const persona = {
	// 	id: 1,
	// 	nombre: 'Sebas'
	// }

	response.write('Hola mundo')
	//response.write(JSON.stringify(persona));
	// response.write('id, nombre\n');
	// response.write('1, Fernando\n');
	// response.write('2, Sebas\n');
	// response.write('3, Juan\n');
	// response.write('4, Maria\n');
	response.end();

}).listen(8085);

console.log('Escuchando en el puerto', 8080);