const evt = require('events').EventEmitter;

const emt = new evt();

emt.on('error', (err) => {
    console.log('Processing error!');
    console.log('Message: ', err.name)
});

emt.emit('error', new Error('test error'));