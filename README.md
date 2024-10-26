


## Installation
Run `npm install` command in root folder and backend folder
```
npm install 
```
## How to Run

```
npm run dev 
```

## What are the changes
### Replaced the API endpoint
```
export const SERVER_URL = "http://localhost:5000/api/"
```
### inside the project directory package.json I have changed the script 
```
"server": "cd backend && npm start"
```
### inside the project backend directory I have changed the dotend config
```
dotenv.config({path: `${__dirname}/../../.env`});
```
### Inside user model, I have change the query to insert the new registered user data
```
const sql = `INSERT INTO ${this.tableName}
            (email, password, country, invite_code, role) VALUES (?,?,?,?,?)`;
```
### Modified the .env inside backend directory to send email from gmail
## Frontend changes includes
1. Created a component to display username
2. Added a menu to wallet page to display username
