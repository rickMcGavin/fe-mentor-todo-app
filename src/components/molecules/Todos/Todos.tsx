import React from "react";
import * as styles from "./styles";
import TodoItem from "../TodoItem";

interface Props {
  [key: string]: {
    completed: boolean;
    text: string;
    id: string;
    deleteTodo: () => void;
  };
}

const Todos = ({ todos }: { todos: Props }) => {
  const keys = Object.keys(todos);
  return (
    <>
      {keys.map((key) => {
        return (
          <TodoItem
            key={key}
            completed={todos[key].completed}
            text={todos[key].text}
            id={todos[key].id}
            deleteTodo={todos[key].deleteTodo}
          />
        );
      })}
    </>
  );
};

export default Todos;
