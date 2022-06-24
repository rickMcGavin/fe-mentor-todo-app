import React from "react";
import * as styles from "./styles";

interface Props {
  itemsLeft?: number;
  clearCompleted: () => void;
}

const UtilityBar = ({ itemsLeft = 0, clearCompleted }: Props) => {
  return (
    <styles.UtilityBar>
      <span>{itemsLeft} items left</span>
      <button onClick={clearCompleted}>Clear Completed</button>
    </styles.UtilityBar>
  );
};

export default UtilityBar;
