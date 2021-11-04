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
    <table className="to-do-list">
      <thead>
        <tr>
          <th>Task</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      { todos.map((todo, index) => {
        return <Task key={index} todo={todo} />
      }) }
      </tbody>
    </table>
  )
}
