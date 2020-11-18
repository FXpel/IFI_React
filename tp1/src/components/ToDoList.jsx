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
    if (this.state.pendingItem === "") return;
    this.setState({
      list: [
        {
          name: this.state.pendingItem,
        },
        ...this.state.list
      ],
      pendingItem: ""
    })
  }

  deleteHandler(index) {
    const newState = this.state.list.filter((item, i) =>
      i !== index
    );

    this.setState({ 
      list: newState
    });
  };

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
  
        <List list={this.state.list} onDelete={(i) => this.deleteHandler(i)} />
      </div>
    );
  }
}

export default ToDoList;