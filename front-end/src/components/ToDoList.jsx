import React, { useState, useEffect } from 'react'

export default function ToDoList() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.log(error))
  })

  return (
    <ul>
      { todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>
      }) }
    </ul>
  )
}
