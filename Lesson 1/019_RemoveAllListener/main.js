const evt = require('events').EventEmitter;
const emt = new evt();

// Добавляем на событие myEvent 3 обработчика
emt.on('myEvent', () => {
    console.log('Listener 1');
});

emt.on('myEvent', () => {
    console.log('Listener 2');
});

emt.on('myEvent', () => {
    console.log('Listener 3');
});
// Генерируем событие myEvent
emt.emit('myEvent');
// Удаляем все обработчики с события myEvent
emt.removeAllListeners('myEvent');
console.log('Listeners were deleted!')
// Повторно генерируем событие myEvent
emt.emit('myEvent');
