import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import TodoInput from "../../atoms/TodoInput";
import Todos from "../../molecules/Todos";
import * as styles from "./styles";
import UtilityBar from "../../molecules/UtilityBar";
import Filter from "../../molecules/Filter";
import useTodoApp from "./useTodoApp";

const TodoApp = () => {
  const {
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
  } = useTodoApp();

  return (
    <styles.TodoApp>
      <TodoInput setNewTodo={setNewTodo} />
      {allTodosCount ? (
        <styles.TodoWrapper>
          <DragDropContext onDragEnd={reorder}>
            <Todos
              setItemsLeft={setItemsLeft}
              filter={filter}
              todos={todos}
              checkTodo={checkTodo}
              deleteTodo={deleteTodo}
              isDragDisabled={filter !== "all"}
            />
          </DragDropContext>
          <UtilityBar
            itemsLeft={itemsLeft}
            clearCompleted={clearCompleted}
            filter={filter}
            setFilter={setFilter}
          />
        </styles.TodoWrapper>
      ) : null}
      {allTodosCount ? (
        <styles.FilterWrapper>
          <Filter filter={filter} setFilter={setFilter} />
        </styles.FilterWrapper>
      ) : null}
      {allTodosCount && filter === "all" ? (
        <styles.DragDropText>Drag and drop to reorder list</styles.DragDropText>
      ) : null}
    </styles.TodoApp>
  );
};

export default TodoApp;
