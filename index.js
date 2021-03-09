//node의 http라는 기본 모듈 가져오기
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//서버 값 설정
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    } else if(req.url === '/users'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('user list');
    } else {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});