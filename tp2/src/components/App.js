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

  inputHandler(e) {
    this.setState({ 
      pendingTitle: e.target.value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    this.setState({
      listToDo: [
        {
          title: this.state.pendingTitle,
          items: [],
          timestamp: Date.now(),
        },
        ...this.state.listToDo
      ],
      pendingTitle: ""
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="inputTitle">
          <h1>Todo List App</h1>
          <InputForm
            onSubmit={(i) => this.submitHandler(i)}
            onChange={(e) => this.inputHandler(e)}
            pendingItem={this.state.pendingTitle}
          />
        </div>
        {this.state.listToDo.map((todoList, index) => (
          <ToDoList
            key={todoList.timestamp}
            title={todoList.title}
            items={todoList.items}
          />
        ))}
      </div>
    );
  }
}

export default App;