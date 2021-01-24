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

  handleClick = () => {
    this.setState({ todoTitle: "Task 0" });
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
          <span className="task">{todo.title}</span>
          <span
            role="img"
            aria-label="emoji"
            className="icon-task"
            onClick={this.handleClick}
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

    // return (
    //   <div>
    // <li>
    //   <span className="task">Task 1</span>
    //   <span
    //     role="img"
    //     aria-label="emoji"
    //     className="icon-task"
    //     onClick={this.handleClick}
    //   >
    //     ✅
    //   </span>
    //   <span role="img" aria-label="emoji" className="icon-task">
    //     ⛔
    //   </span>
    // </li>
    //     <li>
    //       <span className="task">Task 2</span>
    //       <span role="img" aria-label="emoji" className="icon-task">
    //         ✅
    //       </span>
    //       <span role="img" aria-label="emoji" className="icon-task">
    //         ⛔
    //       </span>
    //     </li>
    //     <li>
    //       <span className="task">Task 3 </span>
    //       <span role="img" aria-label="emoji" className="icon-task">
    //         ✅
    //       </span>
    //       <span role="img" aria-label="emoji" className="icon-task">
    //         ⛔
    //       </span>
    //     </li>
    //   </div>
    //);
  };

  render() {
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
