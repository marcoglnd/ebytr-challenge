const { mongoConnection } = require('./connection');

const getTodos = async () => {
  const todosCollection = await mongoConnection()
    .then((db) => db.collection('todos'));
  
  const todos = await todosCollection.find().toArray();

  return todos;
}

const postTodos = async (task, date) => {
  const todosCollection = await mongoConnection()
    .then((db) => db.collection('todos'));
  
  const { insertedId: _id } = await todosCollection
  .insertOne({ text: task, date, completed: false });

  return _id;
}

module.exports = {
  getTodos,
  postTodos
};