import React from "react";
import * as styles from "./styles";
import TodoItem from "../TodoItem";
import type { Todos as TodosType } from "../../../types/todo";

const Todos = ({
  todos,
  filter,
  checkTodo,
  deleteTodo,
}: {
  todos: TodosType;
  filter: "all" | "active" | "completed";
  checkTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}) => {
  const allTodoKeys = Object.keys(todos);
  const completedTodoKeys = allTodoKeys.filter((key) => {
    if (todos[key].completed) return key;
  });

  const activeTodoKeys = allTodoKeys.filter((key) => {
    if (!todos[key].completed) return key;
  });

  const keys = (() => {
    if (filter === "completed") return completedTodoKeys;
    if (filter === "active") return activeTodoKeys;
    return allTodoKeys;
  })();

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
