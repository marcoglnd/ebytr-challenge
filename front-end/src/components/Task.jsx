import React from 'react';

export default function Task({ todo }) {
  return (
    <tr className="task">
      <td>{ todo.text }</td>
      <td>{ todo.date.substring(0, 10) }</td>
    </tr>
  )
}
