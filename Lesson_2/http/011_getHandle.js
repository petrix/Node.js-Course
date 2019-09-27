const http = require('http'); 
const port = 8080;

http.createServer(function (req, res) { 

    console.log('request')
    res.end('GET request path: ' + req.url);  

}).listen(port); 
