import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const propsHolder = props;
  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={propsHolder.todo.completed}
          onChange={() => propsHolder.handleChangeProps(propsHolder.todo.id)}
        />
        <button type="button" onClick={() => propsHolder.deleteTodoProps(propsHolder.todo.id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        <span style={propsHolder.todo.completed ? completedStyle : null}>
          {propsHolder.todo.title}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={propsHolder.todo.title}
        onChange={(e) => {
          propsHolder.setUpdate(e.target.value, propsHolder.todo.id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
