import React, { Component } from "react";
import InputForm from "./InputForm";
import List from './List';

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      pendingItem: ""
    };
  }

  inputHandler(e) {
    this.setState({ 
      pendingItem: e.target.value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    this.setState({
      // TODO 1
    })
  }

  deleteHandler(index) {
    // TODO 2
  }

  render() {
    return (
      <div className="todoList">
        <h2 className="title">
            ToDoList
        </h2>
        <InputForm
          onInput={(e) => this.inputHandler(e)}
          onSubmit={(i) => this.submitHandler(i)}
          pendingItem={this.state.pendingItem}
        />
  
        <List list={[] /* TODO 3 */} onDelete={(i) => this.deleteHandler(i)} />
      </div>
    );
  }
}

export default ToDoList;