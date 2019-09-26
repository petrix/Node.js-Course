const evt = require('events');

const emitter = new evt.EventEmitter();

// поскольку на событие не подписан ни один обработчик, то программа ничего не выполнит
emitter.emit('click');