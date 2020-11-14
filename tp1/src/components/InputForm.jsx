import React from "react";

function InputForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="todoInput">
      <input
        className="input"
        type="text"
        onChange={props.onChange}
        value={props.pendingItem}
        placeholder="Add an item"
      />
    <button type="submit" className="submit">
      Add
    </button>
  </form>
);
};

export default InputForm;
