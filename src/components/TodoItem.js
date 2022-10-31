import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const propsHolder = props;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={propsHolder.todo.completed}
        onChange={() => propsHolder.handleChangeProps(propsHolder.todo.id)}
      />
      <button type="button" onClick={() => propsHolder.deleteTodoProps(propsHolder.todo.id)}>Delete</button>
      <span style={propsHolder.todo.completed ? completedStyle : null}>
        {propsHolder.todo.title}
      </span>
    </li>
  );
};

export default TodoItem;
