const express = require('express');
const fs = require('fs').promises;
const cors = require('cors');

const app = express();

app.use(cors());

const port = 3001;

app.get('/todos', async (req, res) => {
  try {
    const todos = await fs.readFile('./todos.json', 'utf8');
    res.status(200).json(JSON.parse(todos));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));