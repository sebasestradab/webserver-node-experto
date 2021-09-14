require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {console.log(err)});


// Servir contenido estatico, ejecuta el indet.html de la carpeta public
app.use(express.static('public'));

// app.get('/', (req, res) => {
// 	res.render('home', {
// 		nombre: 'Sebas Estrada',
// 		titulo: 'Curso Node'
// 	});
// });

// La linea de app.use ejecuta el home e ignora este codigo
// app.get('/', (req, res) => {
// 	res.send('Home Page')
// });

// app.get('/generic', (req, res) => {
// 	// res.sendFile(__dirname + '/public/generic.html');

// 	res.render('generic', {
// 		nombre: 'Sebas Estrada',
// 		titulo: 'Curso Node'
// 	});
// });

// app.get('/elements', (req, res) => {
// 	// res.sendFile(__dirname + '/public/elements.html');

// 	res.render('elements', {
// 		nombre: 'Sebas Estrada',
// 		titulo: 'Curso Node'
// 	});
// });

app.get('*', (req, res) => {
	// res.sendFile(__dirname + '/public/back/404.html');
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});