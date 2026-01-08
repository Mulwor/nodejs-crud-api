import http from 'http';
import { getRequest, getRequestByUserId } from './methods/get.js';
import { postRequest } from './methods/post.js';
import { putRequest } from './methods/put.js';
import { removeRequest } from './methods/delete.js';
import dotenv from 'dotenv';
dotenv.config();
console.log(dotenv.config());
const PORT = process.env.PORT || 3000;
const server = http.createServer(async (request, response) => {
    const method = request.method || "";
    const url = request.url || "";
    const mainEndpoint = '/api/users';
    const hasMainEndpoint = url.startsWith(`${mainEndpoint}/`);
    response.setHeader('Content-Type', 'application/json');
    // http://localhost:3000/api/users
    if (method === 'GET' && url === mainEndpoint) {
        getRequest(response);
    }
    // http://localhost:3000/api/users/{userId}
    if (method === 'GET' && hasMainEndpoint) {
        getRequestByUserId(response, url);
    }
    // http://localhost:3000/api/users
    if (method === 'POST' && url === mainEndpoint) {
        postRequest(request, response);
    }
    // http://localhost:3000/api/users/{userId}
    if (method === 'PUT' && hasMainEndpoint) {
        putRequest(request, response, url);
    }
    // http://localhost:3000/api/users/{userId}
    if (method === 'DELETE' && hasMainEndpoint) {
        removeRequest(response, url);
    }
});
server.listen(PORT, () => {
    console.log(`Server start work on http://localhost:${PORT}`);
});
