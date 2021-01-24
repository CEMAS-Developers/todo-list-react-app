import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      { title: "Task 1", completed: false },
      { title: "Task 2", completed: true },
      { title: "Task 3", completed: false },
    ],
  };

  toggleTodo = (e) => {
    const index = e.target.getAttribute("data-index");
    const todos = [...this.state.todos];
    const todo = { ...todos[index] };
    todo.completed = !todo.completed;
    todos[index] = todo;
    this.setState({
      todos: todos,
    });

    console.log("Complete ToDo");
  };

  deleteTodo = (e) => {
    const index = e.target.getAttribute("data-index");
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos: todos,
    });
    console.log("Delete ToDo", index);
  };

  renderTodos = () => {
    return this.state.todos.map((todo, index) => {
      return (
        <li key={todo.title}>
          <span className={`task ${todo.completed ? "completed" : ""}`}>
            {todo.title}
          </span>
          <span
            role="img"
            aria-label="emoji"
            className="icon-task"
            onClick={this.toggleTodo}
            data-index={index}
          >
            ✅
          </span>
          <span
            role="img"
            aria-label="emoji"
            className="icon-task"
            onClick={this.deleteTodo}
            data-index={index}
          >
            ⛔
          </span>
        </li>
      );
    });
  };

  render() {
    console.log(this.state.todos);
    const renderedTodos = this.renderTodos();
    return (
      <div className="App">
        <div className="todo-list-container">
          <h1 className="title">ToDo List 📃</h1>
          <ul>{renderedTodos}</ul>
          <form>
            <input type="text" placeholder="Add task here"></input>
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
