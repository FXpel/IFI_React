import React from "react";
import ListItem from "./ListItem";

  function ToDoList(props) {
    return (
      <ul>
        {props.list.map((item, index) => (
          <ListItem
            key={index}
            item={item.name}
            itemIndex={index}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
    );
  };

export default ToDoList;