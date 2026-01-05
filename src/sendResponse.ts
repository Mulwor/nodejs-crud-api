import { ServerResponse } from 'node:http';

export const sendResponse = (response: ServerResponse, status: number, data: unknown) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(data));
}