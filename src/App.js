import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="todo-list-container">
          <h1 className="title"> ToDo List 📃</h1>
          <ul>
            <li>
              <span className="task">Task 1</span>
              <span role="img" aria-label="emoji" className="icon-task">
                ✅
              </span>
              <span role="img" aria-label="emoji" className="icon-task">
                ⛔
              </span>
            </li>
            <li>
              <span className="task">Task 2</span>
              <span role="img" aria-label="emoji" className="icon-task">
                ✅
              </span>
              <span role="img" aria-label="emoji" className="icon-task">
                ⛔
              </span>
            </li>
            <li>
              <span className="task">Task 3 </span>
              <span role="img" aria-label="emoji" className="icon-task">
                ✅
              </span>
              <span role="img" aria-label="emoji" className="icon-task">
                ⛔
              </span>
            </li>
          </ul>
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
