// Обработчики, которые установленны на определенное событие, вызываются синхронно
const evt = require('events').EventEmitter;
const emt = new evt();

emt.on('event', function(){
     setImmediate(() => {
       setImmediate(function () {
        console.log("Listener № 1");
      })
  });    
});

emt.on('event', function(){       
        console.log("Listener № 2");
});

emt.on('event', function(){
     setImmediate(() => {
        console.log("Listener № 3");
  });    
});

// Генерируем событие myEvent и в функцию обработчик передаем 2 параметра
emt.emit('event');