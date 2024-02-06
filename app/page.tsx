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
interface TodoItemType {
  description: string;
  isCompleted: boolean;
  isActive: boolean;
  id: string;
}

export default function Home() {
  const [todos, setTodos] = useState(Array<TodoItemType>);
  const [todoDesc, setTodoDesc] = useState('');
  const [todoTab, setTodoTab] = useState('all');

  const todoId = uuidv4();
  const handleTodoDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTodoDesc(value);
  };

  const handleSubmitTodoBlur = (event: React.FocusEvent<HTMLInputElement>) => {
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
    // if(status === 'active') {
    //   setTodos(prev => {
    //     return todos.filter(t => {
    //       return !t.isCompleted 
    //     })
    //   })
    // } else if (status === 'completed') {
    //   setTodos(prev => {
    //     return todos.filter(t => {
    //       return t.isCompleted
    //     })
    //   })
    // } else {
    //   setTodos(todos)
    // }

    // console.log(todos)
  };

  const handleClearCompletedTodo = () => {
    setTodos(prev => {
      return prev.filter(t => !t.isCompleted)
    })
  }


  const filteredTodos = todos.filter(t => {
    if(todoTab === 'all') return true
    if(todoTab === 'active') return !t.isCompleted && t.isActive
    if(todoTab === 'completed') return t.isCompleted
    return true
  })

  
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
          todos={filteredTodos}
          onDeleteTodo={handleDeleteTodo}
          onCheckedTodo={handleCompleteTodo}
        />
        <div className={styles.todos__details}>
          <p className={styles['todos__details--items-left']}>
            {todos?.length} items left
          </p>
          <nav className={styles['todos__cta--desktop']}>
            <a
              className={styles[todoTab === 'all' ? 'cta__active' : '']}
              onClick={() => handleSelectTodoStatus('all')}>
              All
            </a>
            <a
              className={styles[todoTab === 'active' ? 'cta__active' : '']}
              onClick={() => handleSelectTodoStatus('active')}>
              Active
            </a>
            <a
              className={styles[todoTab === 'completed' ? 'cta__active' : '']}
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
