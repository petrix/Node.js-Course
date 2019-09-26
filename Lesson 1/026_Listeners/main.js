const evt = require('events').EventEmitter;
const emt = new evt();

emt.on('myEvent', function(){
    console.log('First listener.');
});

emt.on('myEvent', function(){
    console.log('Second listener.');
});
// метод listeners возвращает массив функций обработчиков для указаного события
let listeners = emt.listeners('myEvent');

for (let index = 0; index < listeners.length; index++) {
    listeners[index]();
}