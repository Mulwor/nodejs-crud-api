import http from 'http';
import { getRequest, getRequestByUserId } from './methods/get.js';

const requestURL = '/api/users';

const server = http.createServer(async (request, response) => {
  const method = request.method || "";
  const url = request.url || "";

  response.setHeader('Content-Type', 'application/json');

  // http://localhost:3000/api/users
  if (method === 'GET' && url === requestURL) {
    getRequest(response);
  }

  if (method === 'GET' && url.startsWith(`${requestURL}/`)) {
    getRequestByUserId(response, url);
  }
});

server.listen(3000);