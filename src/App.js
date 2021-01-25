import React, { Component } from "react";
import "./App.css";

class TodoList extends Component {
  render() {
    const { todos, toggleTodo, deleteTodo } = this.props;
    return todos.map((todo, index) => {
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
    });
  }
}

class App extends Component {
  state = {
    todos: [
      { title: "Complete task example", completed: false },
      { title: "Incomplete task example", completed: true },
    ],
    inputValue: "",
  };

  toggleTodo = (e) => {
    const index = e.target.getAttribute("data-index");
    const todos = [...this.state.todos];
    const todo = { ...todos[index] };
    todo.completed = !todo.completed;
    todos[index] = todo;
    this.setState({ todos: todos });
  };

  deleteTodo = (e) => {
    const index = e.target.getAttribute("data-index");
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos: todos });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      title: this.state.inputValue,
      complete: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      inputValue: "",
    });
  };

  render() {
    return (
      <div className="App">
        <div className="todo-list-container">
          <h1 className="title">ToDo List 📃</h1>
          <ul>
            {
              <TodoList
                todos={this.state.todos}
                toggleTodo={this.toggleTodo}
                deleteTodo={this.deleteTodo}
              />
            }
          </ul>
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              placeholder="Add task here"
              value={this.state.inputValue}
              onChange={(e) => this.setState({ inputValue: e.target.value })}
            />
            <button>
              <span role="img" aria-label="emoji">
                ➕
              </span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
