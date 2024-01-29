const http = require('http');

let counterHome = 0;
let counterAbout = 0;

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    if(req.url === '/') {

        counterHome++;

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });

        res.end(`
        <h1>Мой сервер работает</h1>
        <br>
        <p> Просмотров: ${counterHome}</p>
        <br>
        <a href='http://localhost:3000/about'>Ссылка на страницу /about </a>
        `);
    } else if (req.url === '/about') {

        counterAbout++;
        
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });

        res.end(`  
        <h1>About</h1>
        <br>
        <p> Просмотров: ${counterAbout}</p>
        <br>
        <a href='http://localhost:3000'>Ссылка на страницу /</a>
        `);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        });

        res.end(`
        <h1>Страница не найдена</h1>`);
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
