const http = require('http'); 
const fs = require('fs'); 
const url = require('url');
const path = require('path'); 

const port = 8080;
const data = [
    {name : 'Book', price : 10},
    {name : 'Pen', price : 20},
    {name : 'Lamp', price : 30},
    {name : 'Pencil', price : 40},
    {name : 'Desk', price : 50}
];
http.createServer(function(req, res) {

    // обработка ошибок запросв
    req.on('error', function (err) {
        console.log(err);
    }); 

    if (req.url == "/") {
            // чтение файла index.html
            const file_path = path.join(__dirname, '010_index.html');
            fs.readFile(file_path, function (err, data) { 

                // обработка ошибок
                if (err) {
                    console.log(err);
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.write('Not Found!');

                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' }); 
                    // записать в овет содержимое читаемого файла 
                    res.write(data.toString());

                }

                res.end();
            })

        } else if (req.url == "/data") {

            let body = ''; 
            // получение данных POST запроса 
            req.on('data', function () {
                body = data.toString(); 
                // создание тела ответа 
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify(data));
                res.end();
                console.log('data sent!');
        });

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Resource not found'); 
    }

}).listen(port); 

console.log('server running on port ' + port); 
