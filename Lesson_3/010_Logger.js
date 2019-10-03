
const express = require('express');
const fs = require('fs');

const app = express();

const path = 'logger.txt';

app.use(function(request, response){
    const data = `Address : ${request.ip}; Time: ${new Date().toLocaleString()}; URL : ${request.url}\n`;

    fs.appendFile(path, data, function(err){
        console.log('data wrote');
    });
});

app.get('/', function(request, response){
    console.log('Main handler');
    response.end();
});

app.listen(8080, function(){
    console.log('Server start')
});