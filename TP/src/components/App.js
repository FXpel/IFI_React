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
        },
        ...this.state.listToDo
      ],
      pendingTitle: ""
    })
  }

  render() {
    return (
      <div>
        <InputForm
          onSubmit={(i) => this.submitHandler(i)}
          onChange={(e) => this.inputHandler(e)}
          pendingItem={this.state.pendingTitle}
        />
        <ul>
          {this.state.listToDo.map((todoList, index) => (
            <ToDoList
              key={todoList.title}
              title={todoList.title}
              items={todoList.items}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;