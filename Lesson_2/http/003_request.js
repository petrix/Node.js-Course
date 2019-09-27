const http = require('http');
const utils = require('util');

http.createServer(function(req, res){
    
    const requestInfo = utils.format('HTTPVersion: %s \nMethod: %s \nStatus code: %s \nMessage: %s \nURL: %s',        
        // верисия http протокола
        req.httpVersion,
        // http глагол
        req.method,
        // статус код
        req.statusCode,
        // текстовое описание статус кода
        req.statusMessage,
        // запрашиваемый ресурс
        req.url);
        
    console.log(requestInfo);

    console.log();
    // headers - свойство содержит объект с заголовками
    for (let key in req.headers) {
        console.log(key, ":", req.headers[key]);
    }
    // отправляем ответ клиенту
    res.end();    
}).listen(8080, 'localhost');