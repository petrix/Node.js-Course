// при получении запроса от клиента, запрос передается в конвеер обработки запросов.
// Конвеер обработки состоит из компонентов, которые в терминологии express называются Middleware

const express = require('express');

const app = express();
// для регистрации middleware используется функция use
// 1. request - данные запроса
// 2. response - объект для управления ответом
// 3. next - следующая в конвейере обработки функция
const cookieParser = {
    getCookie: function (req, res, next) {
        let cookies = req.get('Cookie');

        let cookieCollection = cookies.split(';');

        let tempCookies = {};

        for (var i = 0; i < cookieCollection.length; i++) {
            const elem = cookieCollection[i];
            // foo = bar
            const pos = elem.indexOf('=');
            let key, value;

            if (pos != -1) {
                key = elem.substring(0, pos);
                value = elem.substring(pos + 1);
            }

            tempCookies[key] = decodeURIComponent(value);
        }
        req.cookies = tempCookies;

        next();
    }

}

app.use('/', cookieParser.getCookie);

app.get('/', function(req, res){
    console.log(req.cookies)
})

app.get('/index', function (req, res) {
    console.log('Main handler');
    res.cookie('someCookie', 'this is another cookie!');
    res.cookie('anotherCookie', 'this is another cookie!');
    res.end();
});
app.listen(8080, function () {
    console.log('Server start')
});