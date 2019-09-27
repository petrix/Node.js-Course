// Объект Console, является глобальным и обеспечивает простую отладку приложений в Node.js
// По умолчинию, объект console сконфигурирован на передачу информации в\из process.stdout  и process.stdin

console.log('Simple message.');
console.info('Some data');      // алиас функции console.log()


console.error(new Error('Somthig wrong!'));
const name = "---";
console.warn(`Danger ${name}!`);    // алиас функции console.error()

const obj = { name: "Ivan", age: 25 };
console.dir(obj);