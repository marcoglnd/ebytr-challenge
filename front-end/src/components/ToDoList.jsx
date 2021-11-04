import React, { useState, useEffect } from 'react'
import Task from './Task';

export default function ToDoList() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <ul>
      { todos.map(({ todo }, index) => {
        return <Task key={index} todo={todo} />
      }) }
    </ul>
  )
}
