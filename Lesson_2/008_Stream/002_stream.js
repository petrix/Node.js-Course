// Piping streams - перенаправление данных одного потока к другому потоку  

const fs = require("fs");

// создать поток для чтения данных
const readerStream = fs.createReadStream('input.txt');

// создать поток для записи данных
const writerStream = fs.createWriteStream('output.txt');

// передача данных потока readerStream потоку writerStream 
readerStream.pipe(writerStream);

writerStream.on('finish', function () {
    console.log('data written to file output.txt')
});