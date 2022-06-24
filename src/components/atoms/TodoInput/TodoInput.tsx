import React, { useState } from "react";
import generateTodo from "../../../util/generateTodo";
import * as styles from "./styles";
import type { Todos } from "../../../types/todo";

interface Props {
  todos: Todos;
  setTodos: React.Dispatch<React.SetStateAction<{}>>;
}

const TodoInput = ({ todos, setTodos }: Props) => {
  const [text, setText] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = generateTodo(text);
    setTodos({
      ...todos,
      ...newTodo,
    });
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
