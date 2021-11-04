import React from 'react';
import { MdRemoveCircle } from 'react-icons/md';

export default function Task({ todo }) {
  return (
    <tr className="task">
      <td>{ todo.text }</td>
      <td>{ todo.date.substring(0, 10) }</td>
      <td>
        <MdRemoveCircle
          className="remove-icon"
          color="#fec89a"
          size="1.2rem"
        />
      </td>
    </tr>
  )
}
