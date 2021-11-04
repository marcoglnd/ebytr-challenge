const todoService = require('../services/todoService');

const getTodos = async (req, res) => {
  const response = await todoService.getTodos();

  if (!response) {
    res.status(400).json({ error: 'Todos not found' });
  }

  res.status(200).json(response);
};

const postTodos = async (req, res) => {
  const { task, date } = req.body;
  const response = await todoService.postTodos(task, date);

  if (!response) {
    res.status(400).json({ error: 'Todo not created' });
  }

  res.status(200).json(response);
}

module.exports = {
  getTodos,
  postTodos
};