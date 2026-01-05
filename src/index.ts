import http from 'http';
import { getRequest, getRequestByUserId } from './methods/get.js';
import { postRequest } from './methods/post.js';

const endpoint = '/api/users';

const server = http.createServer(async (request, response) => {
  const method = request.method || "";
  const url = request.url || "";

  response.setHeader('Content-Type', 'application/json');

  // http://localhost:3000/api/users
  if (method === 'GET' && url === endpoint) {
    getRequest(response);
  }

  // http://localhost:3000/api/users/{userId}
  if (method === 'GET' && url.startsWith(`${endpoint}/`)) {
    getRequestByUserId(response, url);
  }

  // http://localhost:3000/api/users
  if (method === 'POST' && url === endpoint) {
    postRequest(request, response);
  }
});

server.listen(3000);