const express = require('express'); 
// модуль оторы позволяет распарсить данные входящего запроса и поместить их в req.body
const bodyParser = require('body-parser'); 
const url = require('url'); 

const app = express(); 
const port = 8080; 

// static - middleware функция для работы с файлами
app.use(express.static('data/013_example')); 
// middleware для обработки тела запроса в кодировке urlencoded 
app.use(bodyParser.urlencoded({ extended: true })); 

//Метод app.route() позволяет создавать обработчики маршрутов
app.route('/')
	.all(function(req, res) {
		console.log('request to main page!'); 
		// перенаправление на страниу index.html
		res.writeHead(301, {'Location':'index.html'}); 
		res.end(); 

}); 

app.route('/test')
	.get(function(req, res) {
		// чтение параметров GET запроса
		let data = url.parse(req.url, true).query; 
		res.writeHead(200, {'Content-Type':'text/html'}); 
		res.end(data.text); 
	})
	.post(function(req, res) {
		// чтение данных POST запроса 
		let data = req.body.text; 
		res.writeHead(200, {'Content-Type':'text/html'}); 
		res.end(data); 
	})

app.listen(port, function() {
	console.log('app running on port ' + port); 
}); 