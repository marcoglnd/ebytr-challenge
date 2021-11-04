import React from 'react';

export default function Task({ task, date }) {
  console.log(task);
  return (
    <li>
      <span>{ task }</span>
      <span>{ date }</span>
    </li>
  )
}
