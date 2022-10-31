import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const stateHandler = this.state;
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const viewMode = {};
    const editMode = {};

    if (stateHandler.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    const propsHolder = this.props;
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
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
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={propsHolder.todo.title}
          onChange={(e) => {
            propsHolder.setUpdate(e.target.value, propsHolder.todo.id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape,
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
  setUpdate: PropTypes.func,
};

TodoItem.defaultProps = {
  todo: {
    id: 1,
    title: '',
    completed: false,
  },
  handleChangeProps: '',
  deleteTodoProps: '',
  setUpdate: '',
};

export default TodoItem;
