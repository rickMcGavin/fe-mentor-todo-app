import React from "react";
import * as styles from "./styles";
import TodoItem from "../TodoItem";
import type { Todos as TodosType } from "../../../types/todo";

const Todos = ({
  todos,
  checkTodo,
  deleteTodo,
}: {
  todos: TodosType;
  checkTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}) => {
  const keys = Object.keys(todos);
  return (
    <div>
      {keys.map((key) => {
        return (
          <TodoItem
            key={key}
            completed={todos[key].completed}
            text={todos[key].text}
            id={todos[key].id}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default Todos;
