const evt = require('events').EventEmitter;
const emt = new evt();

let count = 0;
// придобавлении нового подписчика, генерируется событие newListener
emt.on('newListener', function(event, listener){
    if(event == 'myEvent'){
        console.log('myEvent was be added to emt.');
    }
    
});
// когда подписчик удаляется, срабатывает событие removeListener
emt.on('removeListener', function(event, listener){
    if(event == 'myEvent'){
        console.log('myEvent was be remowed from emt.');
    }
});

emt.on('myEvent', test);
console.log('Listeners count: ', emt.listenerCount('myEvent'));

emt.removeListener('myEvent', test);
console.log('Listeners count: ', emt.listenerCount('myEvent'));

function test(){
    console.log('test event!');
}
