import React from "react";
import TodoInput from "../../atoms/TodoInput";
import Todos from "../../molecules/Todos";
import * as styles from "./styles";
import type { Todos as TodosType, Todo } from "../../../types/todo";
import UtilityBar from "../../molecules/UtilityBar";

const TodoApp = () => {
  const [todos, setTodos] = React.useState<TodosType>({});

  // TODO: abstract these function away
  const setNewTodo = (newTodo: TodosType) => {
    setTodos({
      ...newTodo,
      ...todos,
    });
  };

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
  };

  return (
    <styles.TodoApp>
      <TodoInput setNewTodo={setNewTodo} />
      {Object.keys(todos).length > 0 ? (
        <>
          <Todos todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
          <UtilityBar
            itemsLeft={Object.keys(todos).length}
            clearCompleted={clearCompleted}
          />
        </>
      ) : null}
    </styles.TodoApp>
  );
};

export default TodoApp;
