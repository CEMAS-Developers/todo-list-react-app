import React, { Component } from "react";
import "./App.css";

const user = {
  name: "Tobby",
  age: 4,
  image:
    "https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg",
  size: 420,
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">
          {user.name} tiene {user.age} de edad.
        </h1>
        <img
          className="image"
          alt="Foto de Tobby"
          src={user.image}
          width={user.size}
        />
      </div>
    );
  }
}

export default App;
