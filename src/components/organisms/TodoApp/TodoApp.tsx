import React from "react";
import TodoInput from "../../atoms/TodoInput";
import Todos from "../../molecules/Todos";
import * as styles from "./styles";
import type { Todos as TodosType } from "../../../types/todo";

const TodoApp = () => {
  const [todos, setTodos] = React.useState<TodosType>({});

  const checkTodo = (id: string) => {
    const editedTodo = {
      [id]: {
        ...todos[id],
        completed: !todos[id].completed,
      },
    };
    setTodos({
      ...todos,
      ...editedTodo,
    });
  };

  const deleteTodo = (id: string) => {
    const todosCopy = { ...todos };
    delete todosCopy[id];
    setTodos({ ...todosCopy });
  };

  return (
    <>
      <TodoInput todos={todos} setTodos={setTodos} />
      <Todos todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </>
  );
};

export default TodoApp;
