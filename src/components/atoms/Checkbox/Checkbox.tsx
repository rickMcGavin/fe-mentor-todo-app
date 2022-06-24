import React from "react";
import * as styles from "./styles";

// TODO: Hover states

interface Props {
  completed: boolean;
  id: string;
  checkTodo: (id: string) => void;
}

const Checkbox = ({ completed, id, checkTodo }: Props) => {
  return (
    <styles.CheckboxWrapper>
      <label htmlFor={id}>
        <input
          checked={completed}
          onChange={() => checkTodo(id)}
          type="checkbox"
          id={id}
        />
        <styles.Checkbox />
      </label>
    </styles.CheckboxWrapper>
  );
};

export default Checkbox;
