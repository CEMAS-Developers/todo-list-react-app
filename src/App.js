import React, { Component } from "react";
import "./App.css";

class TodoList extends Component {
  render() {
    const todos = this.props.todos;
    //console.log(this.props.todos);
    return todos.map((todo, index) => {
      return (
        <li key={todo.title}>
          <span className={`task ${todo.complete ? "completed" : ""}`}>
            {todo.title}
          </span>
          <span
            role="img"
            aria-label="emoji"
            className="icon-task"
            onClick={this.toggleTodo}
            data-index={index}
            title="Mark as complete."
          >
            ✅
          </span>
          <span
            role="img"
            aria-label="emoji"
            className="icon-task"
            onClick={this.deleteTodo}
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
      { title: "Task 1", completed: false },
      { title: "Task 2", completed: true },
      { title: "Task 3", completed: false },
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

  renderTodos = () => {
    // return this.state.todos.map((todo, index) => {
    //   return (
    //     <li key={todo.title}>
    //       <span className={`task ${todo.complete ? "completed" : ""}`}>
    //         {todo.title}
    //       </span>
    //       <span
    //         role="img"
    //         aria-label="emoji"
    //         className="icon-task"
    //         onClick={this.toggleTodo}
    //         data-index={index}
    //         title="Mark as complete."
    //       >
    //         ✅
    //       </span>
    //       <span
    //         role="img"
    //         aria-label="emoji"
    //         className="icon-task"
    //         onClick={this.deleteTodo}
    //         data-index={index}
    //         title="Remove task."
    //       >
    //         ⛔
    //       </span>
    //     </li>
    //   );
    // });
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
    //const renderedTodos = this.renderTodos();
    return (
      <div className="App">
        <div className="todo-list-container">
          <h1 className="title">ToDo List 📃</h1>
          <ul>{<TodoList todos={this.state.todos} />}</ul>
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
