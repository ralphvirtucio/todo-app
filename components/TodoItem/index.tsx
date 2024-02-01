import React from 'react';
import styles from './todo.module.css';
import { IconCross } from '../Icons/Cross';
import { IconUnchecked } from '../Icons/Unchecked';
import { IconChecked } from '../Icons/Checked';

export const TodoItem = ({ todo, onDeleteTodo, onCheckedTodo }) => {
  return (
    <li className={styles.todo}>
      <input
        type='checkbox'
        className={styles['todo__input-checkbox']}
        name='todo-checkbox'
        id={todo.id}
        checked={todo.isCompleted}
        onChange={onCheckedTodo}
      />
      <div className={styles.todo__checkbox}>
        <IconChecked />
      </div>

      <div className={styles.todo__unchecked}>
        <IconUnchecked />
      </div>
      <label
        className={styles.todo__description}
        htmlFor={todo.id}>
        {todo.description}
      </label>
      <button
        className={styles['todo__remove-btn']}
        onClick={() => onDeleteTodo(todo.id)}>
        <IconCross />
      </button>
    </li>
  );
};
