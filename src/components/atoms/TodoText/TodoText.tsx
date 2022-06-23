import React from "react";
import * as styles from "./styles";

export interface Props {
  completed: boolean;
  text: string;
}

const TodoText = ({ completed, text }: Props) => {
  return <styles.TodoText completed={completed}>{text}</styles.TodoText>;
};

export default TodoText;
