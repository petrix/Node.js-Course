// Для работы с событиями, необходимо подключить модуль 'events'
const evt = require('events');

const emt = new evt.EventEmitter;

emt.on('myEvent', function(){
    console.log('test string 1');
});
// Метод prependListener добавляет подписчика в начало цепочки
emt.prependListener('myEvent', function(){
    console.log('test string 2');
});

emt.once('myEvent', function(){
    console.log('First once listener');
});

emt.prependOnceListener('myEvent', function(){
    console.log('Seconds once listener');
});

emt.emit('myEvent');
// emt.emit('once');


