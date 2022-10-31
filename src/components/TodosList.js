import React from 'react';
import TodoItem from './TodoItem';

function TodosList(props) {
  const propsHolder = props;
  return (
    <ul>
      {propsHolder.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={propsHolder.handleChangeProps}
          deleteTodoProps={propsHolder.deleteTodoProps}
          setUpdate={propsHolder.setUpdate}
        />
      ))}
    </ul>
  );
}

export default TodosList;
