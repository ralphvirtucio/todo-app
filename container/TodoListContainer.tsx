'use client';

import { TodoItem } from '@/components/TodoItem';
import React from 'react';

interface Todo {
  description: string;
  isCompleted: boolean;
  isActive: boolean;
  id: string;
}
interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: string) => void; 
  onCheckedTodo: React.ChangeEventHandler<HTMLInputElement>;
}

const TodoListContainer = ({
  todos,
  onDeleteTodo,
  onCheckedTodo,
}: TodoListProps 
) => {
  const mappedTodosList = todos.map((item) => {
    return (
      <TodoItem
        key={item.id}
        todo={item}
        onDeleteTodo={onDeleteTodo}
        onCheckedTodo={onCheckedTodo}
      />
    );
  });

  return <ul>{mappedTodosList}</ul>;
};

export default TodoListContainer;
