import React from "react";
import Checkbox from "../../atoms/Checkbox";
import DeleteTodo from "../../atoms/DeleteTodo";
import TodoText from "../../atoms/TodoText";
import * as styles from "./styles";
import type { Todo } from "../../../types/todo";

const TodoItem = ({
  text,
  id,
  completed,
  checkTodo,
  deleteTodo,
}: Todo & {
  checkTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}) => {
  return (
    <styles.TodoItem>
      <Checkbox id={id} completed={completed} checkTodo={checkTodo} />
      <TodoText completed={completed} text={text} />
      <DeleteTodo deleteTodo={() => deleteTodo(id)} />
    </styles.TodoItem>
  );
};

export default TodoItem;
