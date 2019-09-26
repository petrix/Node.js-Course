/* Алгоритм поиска модулей при вызыове функции require('имя_модуля')
      1. Если модуль является системным, происходит его загрузка
      
      2. Если 'имя_модуля' начинается со знака '/' - поиск модуля будет производится в корне файловой системы
      
      3. Если 'имя_модуля' начинается со знака '/', './', '../' - поиск осуществляется несколькими способами:
          3.1 Происходит поиск файла 'имя_модуля' по указанному пути (см. Загрузка файла)
          3.2 Происходит поиск директории имя которой 'имя_модуля' по указанному пути (см. Загрузка директории
      
      4. Поиск папки node_modules
          4.1 Поиск модуля происходит в директории node_modules
          4.2 Если в текущем каталоге нет каталога node_modules, происходит переход в каталог уровнем выше, и производится поиск в нее
      
      5. Ошибка, модуль не найден 
*/

//      Загрузка файла

//      1. Если 'имя_модуля' или 'имя_модуля.js' происходит загрузка  JavaScript файла
//      2. Если 'имя_модуля.json', происходит парсинг файла и загружается JavaScript объект
//      3. Если 'имя_модуля.node', происходит загрузка бинарного файла

//      Загрузка директории

//      1. Если 'имя_модуля' соответствует имени директории и в ней есть файл package.json, происходит парсинг сожержимого в объект 
//         и поиск свойства main (в свойстве находится путь к загружаемым модулям). 
//         Если все прошло успешно, со свойства извлекается значение и происходит загрузка файла (см. Загрузка файла)
//      2. Если предыдущий пункт не выполнен, происходит загрузка файла с именем index (см. Зашрузка индекс файла)

//      Загрузка index файла

//      1. Если 'имя_модуля/index' или 'имя_модуля/index.js' происходит загрузка  JavaScript файла
//      2. Если 'имя_модуля/index.json', происходит парсинг файла и загружается JavaScript объект
//      3. Если 'имя_модуля/index.node', происходит загрузка бинарного файла

require('custom'); // Нужно ввести имя подключаемого файла
