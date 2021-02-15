import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { todo, index, toggleTodo, deleteTodo } = this.props;
    return (
      <li key={todo.title}>
        <span className={`task ${todo.completed ? "completed" : ""}`}>
          {todo.title}
        </span>
        <span
          role="img"
          aria-label="emoji"
          className="icon-task"
          onClick={toggleTodo}
          data-index={index}
          title="Mark as complete."
        >
          ✅
        </span>
        <span
          role="img"
          aria-label="emoji"
          className="icon-task"
          onClick={deleteTodo}
          data-index={index}
          title="Remove task."
        >
          ⛔
        </span>
      </li>
    );
  }
}

export default Todo;
