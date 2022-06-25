import React from "react";
import TodoInput from "../../atoms/TodoInput";
import Todos from "../../molecules/Todos";
import * as styles from "./styles";
import type { Todos as TodosType, FilterTypes } from "../../../types/todo";
import UtilityBar from "../../molecules/UtilityBar";
import Filter from "../../molecules/Filter";

const TodoApp = () => {
  const [todos, setTodos] = React.useState<TodosType>({});
  const [filter, setFilter] = React.useState<FilterTypes>("all");
  const [itemsLeft, setItemsLeft] = React.useState(0);

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
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "4px",
          }}
        >
          <Todos
            setItemsLeft={setItemsLeft}
            filter={filter}
            todos={todos}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
          <UtilityBar
            itemsLeft={itemsLeft}
            clearCompleted={clearCompleted}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      ) : null}
      <styles.FilterWrapper>
        <Filter filter={filter} setFilter={setFilter} />
      </styles.FilterWrapper>
    </styles.TodoApp>
  );
};

export default TodoApp;
