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
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="task">
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Digite a tarefa"
            onChange={ ({ target: { value } }) => setTask(value)}
          />
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  )
}
