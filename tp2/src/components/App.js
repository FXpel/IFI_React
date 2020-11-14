import React, { Component } from "react";
import "../styles/App.css";
import InputForm from "./InputForm";
import ToDoList from "./ToDoList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listToDo: [],
      pendingTitle: ""
    };
  }

  /* TODO 1*/

  render() {
    return (
      <div className="wrapper">
        <div className="inputTitle">
          <h1>Todo List App</h1>
          <InputForm
            /* TODO 1*/
          />
        </div>
        {this.state.listToDo.map((todoList, index) => (
          <ToDoList
            /* TODO 2*/
          />
        ))}
      </div>
    );
  }
}

export default App;