"use client"

import { TodoItem } from '@/components/TodoItem'
import React from 'react'

const TodoListContainer = ({todos, onDeleteTodo, onCheckedTodo}) => {

  const mappedTodosList = todos.map(item => {
    return (
      <TodoItem key={item.id} todo={item} onDeleteTodo={onDeleteTodo} onCheckedTodo={onCheckedTodo}/>
    )
  }) 

  return (
    <ul>
      {mappedTodosList}
    </ul>
  )
}

export default TodoListContainer;