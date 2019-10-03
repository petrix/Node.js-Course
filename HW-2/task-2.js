const http = require('http');

const server = http.createServer();

server.on('request', function (req, res) {
    // console.log('Connection established!');    
    console.log(req.method);
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.write('PLATFORM : ' + process.platform);
    res.write('<br>');
    res.write('VERSION : ' + process.version);
    res.write('<br>');
    res.write('METHOD : ' + req.method);
    res.write('<br>');

    switch (req.method) {
        case 'GET': {
            res.write('USER REQUESTED');
            console.log('USER REQUESTED');
            break;
        }
        case 'POST': {
            res.write('USER CREATED');
            console.log('USER CREATED');
            break;
        }
        case 'PUT': {
            res.write('USER UPDATED');
            console.log('USER UPDATED');
            break;
        }
        case 'DELETE': {
            res.write('USER DELETED');
            console.log('USER DELETED');
            break;
        }
    }




    res.end();
});

server.listen(8080);

server.on('listening', function () {
    console.log('Server running on port 8080');
});