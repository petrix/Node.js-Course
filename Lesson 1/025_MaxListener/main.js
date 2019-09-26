const evt = require('events').EventEmitter;
const emt = new evt();

emt.setMaxListeners(20);

for (let index = 0; index < 11; index++) { // попробовать 11
    //(function(){
        // var current = index;
        emt.on('myEvent', function(){
            console.log(index);
        });    
    //})();
}         

// функция возвразает количество зарегистрированных обработчиков указанного события
console.log('EMT has', emt.listenerCount('myEvent'), 'listeners.');

// Генерируем событие myEvent 
emt.emit('myEvent');
