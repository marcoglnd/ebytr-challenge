import React, { useState } from 'react';

export default function TaskForm() {
  const [task, setTask] = useState('');
  const handleSubmit = (e) => {
    return fetch('http://localhost:3001/todos', {
      method: 'POST',
      body: JSON.stringify({ task, date: new Date()}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div className="task-form">
      <form onSubmit={ handleSubmit }>
        <label htmlFor="task">
          <input
            type="text"
            name="task"
            id="task"
            className="task-input"
            placeholder="write a new task"
            onChange={ ({ target: { value } }) => setTask(value)}
          />
        </label>
        <button type="submit" className="submit-btn">add task</button>
      </form>
    </div>
  )
}
