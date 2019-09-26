const evt = require('events').EventEmitter;
const emt = new evt();

emt.on('myEvent', test);

// Генерируем событие myEvent и в функцию обработчик передаем 2 параметра
emt.emit('myEvent', 10, 15);

function test(a, b){
    console.log(a, b)
}