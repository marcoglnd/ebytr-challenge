const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoController = require('./controllers/todoController');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 3001;

app.get('/todos', todoController.getTodos);

app.post('/todos', todoController.postTodos);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));