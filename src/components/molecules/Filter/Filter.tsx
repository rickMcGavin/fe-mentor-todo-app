import React from "react";
import * as styles from "./styles";

interface Props {
  setFilter: React.Dispatch<
    React.SetStateAction<"all" | "active" | "completed">
  >;
}

const Filter = ({ setFilter }: Props) => {
  return (
    <styles.Filter>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </styles.Filter>
  );
};

export default Filter;
