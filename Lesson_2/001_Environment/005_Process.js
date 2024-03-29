// Объект process является глобальным и всегда доступен, без подключения модулей.
// Этот объект предоставляет информацию и позволяет управлять текущим процессом

// Свойство хранит информацию о архитектуре процессора
console.log(process.arch);
// Свойство хранит путь по которому запускается Node js, путь по которому находится исполняемый файл, и аргументы командной строки
console.log(process.argv);
// возвразает путь к серверу
console.log(process.execPath);
// метод возвращает версию Node js
console.log(process.version);
// метод возвращает название платформы, на которой выполняется приложение
console.log(process.platform);
// возвращает информацию об использовании памяти 
console.log(process.memoryUsage());
// {
//   heapTotal: 1826816,        - используемая движком V8, память
//   heapUsed: 650472,          - используемая движком V8, память
//   external: 49879            - память используемая внешними библиотеками
// }

process.on('unhandledRejection', (reason, promise) => {
    unhandledRejections.set(promise, reason);
});


process.on('rejectionHandled', (promise) => {
    unhandledRejections.delete(promise);
});