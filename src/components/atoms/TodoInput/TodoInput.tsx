import React, { useState } from "react";
import generateTodo from "../../../util/generateTodo";
import * as styles from "./styles";
import type { Todos, Todo } from "../../../types/todo";

interface Props {
  setNewTodo: (newTodo: Todos) => void;
}

const TodoInput = ({ setNewTodo }: Props) => {
  const [text, setText] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = generateTodo(text);
    setNewTodo(newTodo);
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
