import React from "react";
import IronCross from "./IronCross";
import * as styles from "./styles";

interface Props {
  deleteTodo: () => void; // function to delete a todo item
}

const DeleteTodo = ({ deleteTodo }: Props) => {
  return (
    <styles.DeleteTodo>
      <IronCross onClick={deleteTodo} />
    </styles.DeleteTodo>
  );
};

export default DeleteTodo;
