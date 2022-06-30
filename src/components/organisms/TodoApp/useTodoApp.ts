import React from "react";
import { DropResult } from "react-beautiful-dnd";
import type {
  Todos as TodosType,
  FilterTypes,
  Todo,
} from "../../../types/todo";
import { DEFAULT_LIST } from "../../../constants";

const useTodoApp = () => {
  const [todos, setTodos] = React.useState<TodosType>({});
  const [filter, setFilter] = React.useState<FilterTypes>("all");
  const [itemsLeft, setItemsLeft] = React.useState(0);
  const allTodosCount = Object.keys(todos).length;

  const setNewTodo = (newTodo: TodosType) => {
    const newTodos = {
      ...newTodo,
      ...todos,
    };
    setTodos(newTodos);
    localStorage.setItem("myTodos", JSON.stringify(newTodos));
  };

  const checkTodo = (id: string) => {
    const editedTodo = {
      [id]: {
        ...todos[id],
        completed: !todos[id].completed,
      },
    };
    const editedTodos = {
      ...todos,
      ...editedTodo,
    };

    setTodos(editedTodos);
    localStorage.setItem("myTodos", JSON.stringify(editedTodos));
  };

  const deleteTodo = (id: string) => {
    const todosCopy = { ...todos };
    delete todosCopy[id];
    setTodos({ ...todosCopy });
    localStorage.setItem("myTodos", JSON.stringify({ ...todosCopy }));
  };

  const clearCompleted = () => {
    const keys = Object.keys(todos);
    const newTodos = {} as TodosType;
    keys.forEach((key) => {
      if (!todos[key].completed) {
        newTodos[key] = {
          ...todos[key],
        };
      }
    });
    setTodos(newTodos);
    localStorage.setItem("myTodos", JSON.stringify({ ...newTodos }));
  };

  const reorder = (result: DropResult) => {
    if (!result?.destination?.index && result?.destination?.index !== 0) return;
    const todosCopy = { ...todos };
    const keysArray = Object.keys(todosCopy);
    keysArray.splice(result.source.index, 1);
    keysArray.splice(result?.destination?.index, 0, result.draggableId);
    const newTodos = {} as { [key: string]: Todo };
    keysArray.forEach((key) => {
      newTodos[key] = todosCopy[key];
    });
    setTodos({
      ...newTodos,
    });
    localStorage.setItem("myTodos", JSON.stringify({ ...newTodos }));
  };

  React.useEffect(() => {
    const storedTodos = localStorage.getItem("myTodos") ?? "";
    if (storedTodos) {
      setTodos({ ...JSON.parse(storedTodos) });
    } else {
      setTodos({ ...DEFAULT_LIST });
    }
  }, []);

  return {
    allTodosCount,
    filter,
    itemsLeft,
    todos,
    checkTodo,
    clearCompleted,
    deleteTodo,
    reorder,
    setFilter,
    setItemsLeft,
    setNewTodo,
  };
};

export default useTodoApp;
