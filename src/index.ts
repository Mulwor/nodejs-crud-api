import http from 'http';

const server = http.createServer((request, response) => {
  response.end('Start work with CRUD-API');
});

server.listen(3000);