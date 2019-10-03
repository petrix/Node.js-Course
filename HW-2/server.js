const http = require('http');

const server = http.createServer();

server.on('request', function(request, response){
    console.log('Connection established!');    
    console.log(request.method);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write('PLATFORM : '+process.platform);
    response.write('<br>');
    response.write('VERSION : '+process.version);
    response.end();
});

server.listen(8080);

server.on('listening', function(){
    console.log('Server running on port 8080');
});