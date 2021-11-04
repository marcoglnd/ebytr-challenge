const todoModel = require('../models/todoModel');

const getTodos = async () => {
  const response = await todoModel.getTodos();
  return response;
};

const postTodos = async (task, date) => {
  const response = await todoModel.postTodos(task, date);
  return response;
}

module.exports = {
  getTodos,
  postTodos
};