import React from "react";
import type { Todos as TodosType, FilterTypes } from "../../../types/todo";

interface Props {
  todos: TodosType;
  filter: FilterTypes;
  setItemsLeft: React.Dispatch<React.SetStateAction<number>>;
}

const useTodos = ({ todos, filter, setItemsLeft }: Props) => {
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

  const handleSetItemsLeft = React.useCallback(() => {
    setItemsLeft(Object.keys(keys).length);
  }, [setItemsLeft, keys]);

  React.useEffect(() => {
    handleSetItemsLeft();
  }, [keys, handleSetItemsLeft]);

  return { keys };
};

export default useTodos;
