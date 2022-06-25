import React from "react";
import * as styles from "./styles";
import Filter from "../Filter";
import type { FilterTypes } from "../../../types/todo";

interface Props {
  itemsLeft?: number;
  clearCompleted: () => void;
  filter: FilterTypes;
  setFilter: React.Dispatch<React.SetStateAction<FilterTypes>>;
}

const UtilityBar = ({
  itemsLeft = 0,
  clearCompleted,
  filter,
  setFilter,
}: Props) => {
  return (
    <styles.UtilityBar>
      <span>{itemsLeft} items left</span>
      <styles.FilterWrapper>
        <Filter filter={filter} setFilter={setFilter} />
      </styles.FilterWrapper>
      <styles.ClearCompleted onClick={clearCompleted}>
        Clear Completed
      </styles.ClearCompleted>
    </styles.UtilityBar>
  );
};

export default UtilityBar;
