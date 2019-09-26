const evt = require('events');

// Все обьекты которые генерируют события в Node.js должны быть экземплярами класса EventEmitter, или его наследников
const emitter = new evt.EventEmitter();

 emitter.on('create', function(){
     console.log('Folder was created!');    
 });
 

 emitter.emit('create');

