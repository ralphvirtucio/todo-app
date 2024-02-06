import React from 'react';
import styles from './todo.module.css';
import { IconCross } from '../Icons/Cross';
import { IconUnchecked } from '../Icons/Unchecked';
import { IconChecked } from '../Icons/Checked';

  
interface Todo {
  description: string;
  isCompleted: boolean;
  isActive: boolean;
  id: string;
}

interface TodoItemProps {
  todo: Todo,
  onDeleteTodo: (id: string) => void,
  onCheckedTodo: React.ChangeEventHandler<HTMLInputElement>
}

export const TodoItem = ({ todo, onDeleteTodo, onCheckedTodo }: TodoItemProps) => {
  
  return (
    <li className={styles.todo}>
      <input
        type='checkbox'
        className={styles['todo__input-checkbox']}
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
