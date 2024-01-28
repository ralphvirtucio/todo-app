"use client"

import { TodoItem } from '@/components/TodoItem'
import React from 'react'

const TodoListContainer = ({todos}) => {

  const {data} = todos
  const mappedTodosList = data.map(item => {
    return (
      <TodoItem key={item.id} todo={item} />
    )
  }) 

  return (
    <ul>
      {mappedTodosList}
    </ul>
  )
}

export default TodoListContainer;