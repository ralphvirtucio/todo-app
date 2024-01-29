import React from 'react'
import styles from './todo.module.css'
import { IconCross } from '../Icons/Cross'


export const TodoItem = ({todo}) => {
  return (
    <li className={styles.todo}>
      <input type="checkbox" className={styles['todo__input-checkbox']} name="todo-checkbox" id={todo.id} />
      <label className={styles.todo__description} htmlFor={todo.id}>
        {todo.description}
      </label>
      <button className={styles['todo__remove-btn']}>
        <IconCross />
      </button>
    </li>
  )
}
