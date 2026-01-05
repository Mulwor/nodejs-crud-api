## Welcome to a repository that covers basic CRUD (create, read, update, delete) operations.

### ⚙️ Setup:

1\. Clone the repository - you need to copy this link: `https://github.com/Mulwor/nodejs-crud-api.git` and paste it into terminal;

2\. Then switch to dev branch using the command - `git checkout dev`;

3\. Then install dependencies - `npm i` or `npm install`;

4\. Write something about env;

5\. We have 2 modes: 
 - `npm run start:dev` for development mode;
 - `npm run start:prod` for product mode;

6\. Maybe i make cluster, but i am not sure

---

### ⚙️ Example Test Scenarios

You need open the postman and write this scenarios: 

| Request-method | path | what to do |
| -------------- | ---- | ----------- |
| GET | `/api/users` | Get all users |
| GET | `/api/users/{userId}` | Get user by id |
| POST | `/api/users` | Create a new user | 
| PUT | `/api/users/{userId}` | Update user by id |
| DELETE | `/api/users/{userId}` | Delete user by id |

Example of request mode:
```js
{
  "username": "Oleg",
  "age": 33,
  "hobbies": ["reading", "about", "master", "and", "margarita (cheese)"]
}
```