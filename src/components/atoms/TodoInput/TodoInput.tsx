import React, { useState } from "react";
import * as styles from "./styles";

const TodoInput = () => {
  const [text, setText] = useState("");

  // TODO: Clean up any
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // TODO: Submit this to localStorage.
    console.log("TODO:", text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <styles.TodoWrapper>
        <styles.TodoInput
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Create a new todo..."
        />
      </styles.TodoWrapper>
    </form>
  );
};

export default TodoInput;
