import React, { Component } from "react";
import "../styles/App.css";
import ToDoList from "./ToDoList"

class App extends Component {
  render() {
    return (
      <div className="origin">
        <ToDoList/>
      </div>
    );
  }
}

export default App;
