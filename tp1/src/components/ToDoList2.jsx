import React, { useState, useEffect } from 'react';
import InputForm from "./InputForm";
import List from './List';



function ToDoList2 (props){
  const [list, setList] = useState([]);
  const [pendingItem, setPendingItem] = useState("");


  const submitHandler = e =>{
    e.preventDefault();
    if ({pendingItem} === "") return;
    setList([...list,{name:pendingItem} ]);
    setPendingItem("");
  }

  const deleteHandler = index => {
    const newState = {list}.filter((item, i) =>
      i !== index
    );
    setList(newState);
  };

  const inputHandler = e => {
    setPendingItem(e.target.value)
  };


    return (
      <div className="todoList">
        <h2 className="title">
            {props.title}
        </h2>
        <InputForm
          onInput={(e) => inputHandler(e)}
          onSubmit={(i) => submitHandler(i)}
          pendingItem={pendingItem}
        />

        <List list={list} onDelete={(i) => deleteHandler(i)} />
      </div>
    );

}

export default ToDoList2;


