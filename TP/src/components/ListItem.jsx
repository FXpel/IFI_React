import React from "react";

function ListItem(props){
  return (
    <li>
        <div>{props.item}</div>
        <button className="delete" onClick={
            () => {props.onDelete(props.itemIndex)}
        }>
            x
        </button>
    </li>
  );
};

export default ListItem;