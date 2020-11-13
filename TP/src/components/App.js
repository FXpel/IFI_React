import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";
import InputForm from "./InputForm";
import ToDoList from './ToDoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [],
      pendingItem: ""
    };
  }

  submitHandler(e) {
    e.preventDefault();
    this.setState({
      toDoList: [
        {
          name: this.state.pendingItem,
        },
        ...this.state.toDoList
      ],
      pendingItem: ""
    })
    return (
      <form
        onSubmit={this.props.submitHandler}
        className="todoInput">

      </form>
    )
  }

  deleteHandler(index) {
    const newState = this.state.toDoList.filter(item => 
      this.state.toDoList.indexOf(item) !== index 
    );

    this.setState({ 
      toDoList: newState
    });
  };

  inputHandler(e) {
    this.setState({ 
      pendingItem: e.target.value
    });
  }

  render() {
    return (
      <div className="wrapper">
        <InputForm
          onSubmit={(i) => this.submitHandler(i)}
          onChange={(e) => this.inputHandler(e)}
          pendingItem={this.state.pendingItem}
        />
  
        <ToDoList list={this.state.toDoList} onDelete={(i) => this.deleteHandler(i)} />
      </div>
    );
  }
}

export default App;
