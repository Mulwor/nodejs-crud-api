Welcome to a repository that covers basic CRUD (create, read, update, delete) operations.

### ⚙️ Setup:

1\. Clone the repository - you need to copy this link: `https://github.com/Mulwor/nodejs-crud-api.git` and paste it into terminal;

2\. Then switch to dev branch using the command - `git checkout dev`;

3\. Then install dependencies - `npm i` or `npm install`;

---

### ⚙️ Example Test Scenarios

You need open the postman and write this scenarios: 

1\. GET `/api/users` → returns an empty array;

2\. GET `/api/users/{id}` → returns created user;

3\. POST `/api/users` → creates a new user;

4\. PUT `/api/users/{id}` → updates user data;

5\. DELETE `/api/users/{id}` → deletes user;

6\. GET `/api/users/{id}` → returns 404 after deletion;
