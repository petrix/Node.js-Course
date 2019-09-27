// path модуль ядра, обеспечивающий обработку и преобразование путей к файлам
const path = require('path');

// С помощью метода basename можно получить имя файла с расширением
const filename = path.basename(__filename);
console.log('Current file: ', filename);

// path.resolve - метод преобразующий относительный путь в абсолютный
console.log(path.resolve('./test'));

// метод возвразает расширение файла
const extension = path.extname(__filename);
console.log('Current file, has', extension, 'extensions!');

// path.isAbsolute проверяет, является ли путь абсолютным
const abs = path.isAbsolute(__dirname);
console.log('path.isAbsolute(', __dirname, ') - ',  abs);
console.log('path.isAbsolute(','public/myProject/test', ') - ',  path.isAbsolute('public/myProject/test'));

