// path модуль ядра, обеспечивающий работу с путями директорий и файлов
const path = require('path');

const file = '004_Path_2.js';
// метод join предназначен для генерации путей, на основе принятых параметров
const filePath = path.join(__dirname, file);

console.log(filePath);
// Парсит заданый путь и возвращает объект
const pathParts = path.parse(filePath);

console.log(pathParts);

console.log('Systems separator:', path.sep); // Try on windows

const objFormated = {
    root: 'D:\\',
    dir: 'D:\\Node\\003_ConosleProgram\\001_Environment',
    base: '004_Path_2.js',
    ext: '.js',
    name: '004_Path_2'    
}
// Метод format генерирует новый путь на основе свойств объекта
const obj = path.format(objFormated);

console.log(obj);   