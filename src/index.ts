import http from 'http';
import { getRequest, getRequestByUserId } from './methods/get.js';
import { postRequest } from './methods/post.js';
import { putRequest } from './methods/put.js';
import { removeRequest } from './methods/delete.js';
import dotenv from 'dotenv';
import { sendResponse } from './utils/sendResponse.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

const server = http.createServer(async (request, response) => {
  const method = request.method || "";
  const url = request.url || "";
  const mainEndpoint = '/api/users';
  const hasMainEndpoint = url.startsWith(`${mainEndpoint}/`)

  response.setHeader('Content-Type', 'application/json');

  // http://localhost:3000/api/users
  if (method === 'GET' && url === mainEndpoint) {
    return getRequest(response);
  }

  // http://localhost:3000/api/users/{userId}
  if (method === 'GET' && hasMainEndpoint) {
    return getRequestByUserId(response, url);
  }

  // http://localhost:3000/api/users
  if (method === 'POST' && url === mainEndpoint) {
    return postRequest(request, response);
  }

  // http://localhost:3000/api/users/{userId}
  if (method === 'PUT' && hasMainEndpoint) {
    return putRequest(request, response, url);
  }

  // http://localhost:3000/api/users/{userId}
  if (method === 'DELETE' && hasMainEndpoint) {
    return removeRequest(response, url);
  }

  return sendResponse(response, 404, { message: 'Endpoint not found' });
});

server.listen(PORT, () => {
  console.log(`Server start work on http://localhost:${PORT}`)
});