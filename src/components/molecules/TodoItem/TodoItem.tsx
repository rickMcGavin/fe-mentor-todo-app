import React from "react";
import Checkbox from "../../atoms/Checkbox";
import DeleteTodo from "../../atoms/DeleteTodo";
import TodoText from "../../atoms/TodoText";
import * as styles from "./styles";

interface Props {
  completed: boolean;
  id: string;
  text: string;
  deleteTodo: () => void;
}

const TodoItem = ({ text, id, completed, deleteTodo }: Props) => {
  return (
    <styles.TodoItem>
      <Checkbox id={id} completed={completed} />
      <TodoText completed={completed} text={text} />
      <DeleteTodo deleteTodo={deleteTodo} />
    </styles.TodoItem>
  );
};

export default TodoItem;
