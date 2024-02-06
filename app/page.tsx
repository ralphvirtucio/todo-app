// Todo
'use client';

import InputContainer from '@/container/InputContainer';
import TodoListContainer from '@/container/TodoListContainer';
import data from '@/data/data.json';
import styles from './page.module.css';
import React from 'react';
import { useState } from 'react';
import { Card } from '@/components/Card';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [todos, setTodos] = useState(data.data);
  const [todoDesc, setTodoDesc] = useState('');
  const [todoTab, setTodoTab] = useState('all');

  const handleTodoDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTodoDesc(value);
  };

  const handleSubmitTodoBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const todoId = uuidv4();
    const { value } = event.target;

    const newTodoObj = {
      description: value,
      isCompleted: false,
      isActive: false,
      id: todoId,
    };

    setTodos((prev) => [newTodoObj, ...prev]);

    setTodoDesc('');
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleCompleteTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    const selectedTodo = todos.find((t) => t.id === id);

    if (selectedTodo) {
      selectedTodo.isCompleted = checked;

      setTodos((prev) => {
        return prev.map((t) => {
          return {
            ...t,
            isCompleted: selectedTodo.isCompleted,
          };
        });
      });
    }
  };

  const handleSelectTodoStatus = (status: string) => {
    setTodoTab(status);


    setTodos((prev) => {
      return prev.filter(t => {
        if(status === 'active') {
          return false
        } else {
          return true
        }
      })
    })
    // const cloneTodos = [...todos]

    // if(status === 'active') {
    //   setTodos((prev) => prev.filter((t) => t.isActive))
    // } else if (status === 'completed') {
    //   setTodos((prev) => prev.filter((t) => t.isCompleted))
    // } else {
    //   setTodos(cloneTodos)
    // }

    console.log(todos)

    // console.log(cloneTodos)
  };

  const handleClearCompletedTodo = () => {
    setTodos(prev => {
      return prev.filter(t => !t.isCompleted)
    })
  }

  
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
            {todos?.length} items left
          </p>
          <nav className={styles['todos__cta--desktop']}>
            <a
              href='#'
              onClick={() => handleSelectTodoStatus('all')}>
              All
            </a>
            <a
              href='#'
              onClick={() => handleSelectTodoStatus('active')}>
              Active
            </a>
            <a
              href='#'
              onClick={() => handleSelectTodoStatus('completed')}>
              Completed
            </a>
          </nav>
          <button className={styles['todos__details--clear-btn']} onClick={handleClearCompletedTodo}>
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
