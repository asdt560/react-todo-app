import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const stateHolder = this.state;
    const propsHolder = this.props;
    if (stateHolder.title.trim()) {
      propsHolder.addTodoProps(stateHolder.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  render() {
    const stateHolder = this.state;
    return (
      <form
        className="form-container"
        onSubmit={this.handleSubmit}
      >
        <input
          name="title"
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={stateHolder.title}
          onChange={this.onChange}
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    );
  }
}
InputTodo.propTypes = {
  addTodoProps: PropTypes.func,
};

InputTodo.defaultProps = {
  addTodoProps: '',
};

export default InputTodo;
