    // Потоки(Streams) - объекты, которые позволяют считывать данные или записывать данные в источник в непрерывном режиме.
    // В NodeJS есть 4 типа потоков: 
        // Readable - поток, который используется для операций чтения
        // Writable - поток, который используется для операци записи 
        // Duplex - поток, который может быть использован и для операций чтения, и для операций записи 
        // Transform - тип duplex-потока, в котором выходные данные рассчитываеются на основе входных данных  

const fs = require('fs'); 
const writeData = 'This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!This is the file content!';

// поток для записи данных 
// генерирует события error(при ошибке), finish(при завершении текущей операции записи данных)
const writerStream = fs.createWriteStream('output.txt'); 

writerStream.write(writeData, 'utf-8'); 

writerStream.end(); 

writerStream.on('finish', function() {
    console.log('Write completed'); 
}); 

writerStream.on('error', function(err) {
    console.log(err); 
});

// поток для чтения данных
// генерирует события error(при ошибке), data(когда данные доступны для чтения), 
// end(когда больше нет доступных данных для чтения)
let readData = ''; 
let readerStream = fs.createReadStream('output.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', function (chunk) {
    console.log('chunk:',chunk);
    readData += chunk; 
});

readerStream.on('end', function () {
    console.log('readData',readData); 
});

readerStream.on('error', function (err) {
    console.log(err);
}); 
