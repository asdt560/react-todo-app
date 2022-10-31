import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    const propholder = props;
    e.preventDefault();
    if (title.trim()) {
      propholder.addTodoProps(title);
      setTitle('');
    } else {
      alert('Please write item');
    }
  };

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit}
    >
      <input
        name="title"
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        value={title}
        onChange={onChange}
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};

export default InputTodo;
