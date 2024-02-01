// Todo
'use client';

import InputContainer from '@/container/InputContainer';
import TodoListContainer from '@/container/TodoListContainer';
import data from '@/data/data.json';
import styles from './page.module.css';
import { useState } from 'react';
import { Card } from '@/components/Card';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todoDesc, setTodoDesc] = useState('');

  const handleTodoDesc = (e) => {
    setTodoDesc(e.target.value);
  };

  const handleSubmitTodoBlur = (e) => {
    const todoId = uuidv4();

    const newTodoObj = {
      description: e.target.value,
      isCompleted: false,
      isActive: false,
      id: todoId,
    };

    setTodos((prev) => [newTodoObj, ...prev]);

    setTodoDesc('');
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleCompleteTodo = (e) => {
    const { id, checked } = e.target;
    const selectedTodo = todos.find(t => t.id === id)


    selectedTodo.isCompleted = checked

    setTodos((prev) => {
      return prev.map(t => {
        return {
          ...t,
          isCompleted: selectedTodo.isCompleted
        }
      })
    })
  };

  return (
    <>
      <section>
        <InputContainer
          todoDesc={todoDesc}
          onChangeTodoDesc={handleTodoDesc}
          onBlurSubmit={handleSubmitTodoBlur}
        />
      </section>

      <Card customStyles='todos'>
        <TodoListContainer
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onCheckedTodo={handleCompleteTodo}
        />
        <div className={styles.todos__details}>
          <p className={styles['todos__details--items-left']}>
            {todos.length} items left
          </p>
          <nav className={styles['todos__cta--desktop']}>
            <a href='#'>All</a>
            <a href='#'>Active</a>
            <a href='#'>Completed</a>
          </nav>
          <button className={styles['todos__details--clear-btn']}>
            Clear Completed
          </button>
        </div>
      </Card>

      <Card customStyles='todos__cta--mobile'>
        <nav>
          <a href='#'>All</a>
          <a href='#'>Active</a>
          <a href='#'>Completed</a>
        </nav>
      </Card>

      <section className={styles['todos__drag-n-drop-label']}>
        <p>Drag and drop to reorder list</p>
      </section>
    </>
  );
}
