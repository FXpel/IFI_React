import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";
import InputForm from "./InputForm";
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      pendingItem: ""
    };
  }

  submitHandler(e) {
    e.preventDefault();
    this.setState({
      list: [
        {
          name: this.state.pendingItem,
        },
        ...this.state.list
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
    const newState = this.state.list.filter(item => 
      this.state.list.indexOf(item) !== index 
    );

    this.setState({ 
      list: newState
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
  
        <List list={this.state.list} onDelete={(i) => this.deleteHandler(i)} />
      </div>
    );
  }
}

export default App;
