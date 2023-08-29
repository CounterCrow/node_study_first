const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' }); // charset을 명시적으로 설정
  res.end('Hello world! 한국어 되나?');
});

server.listen(port, () => console.log(`server started on port ${port}; ` +
  'press Ctrl-C to terminate....'));
