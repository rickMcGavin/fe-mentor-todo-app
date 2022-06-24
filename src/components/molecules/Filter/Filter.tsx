import React from "react";
import * as styles from "./styles";
import type { FilterTypes } from "../../../types/todo";

interface Props {
  filter: FilterTypes;
  setFilter: React.Dispatch<React.SetStateAction<FilterTypes>>;
}

const filterTypes: FilterTypes[] = ["all", "active", "completed"];

const Filter = ({ filter, setFilter }: Props) => {
  return (
    <styles.Filter>
      {filterTypes.map((filterType) => (
        <styles.FilterButton
          key={filterType}
          $active={filter === filterType}
          onClick={() => setFilter(filterType)}
        >
          {filterType}
        </styles.FilterButton>
      ))}
    </styles.Filter>
  );
};

export default Filter;
