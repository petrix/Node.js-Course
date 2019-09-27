const http = require('http'); 
const fs = require('fs'); 
const url = require('url');

const port = 8080;
http.createServer(function(req, res) {
    console.log(res);
	 var body = ''; 

 	 // обработка ошибок запросв
 	 req.on('error', function(err) {
 	 	console.log(err); 
 	 }); 
 	 // получение данных POST запроса 
 	 req.on('data', function(data) {

 	 	body = data.toString(); 

 	 	// создание тела ответа 
 	 	res.writeHead(200, {'Content-Type': 'text/html'}); 
		res.write(body); 
		res.end(); 

		console.log(`data from request: ${body}`); 
 	 });  
}).listen(port); 


