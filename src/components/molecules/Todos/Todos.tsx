import React from "react";
import TodoItem from "../TodoItem";
import useTodos from "./useTodos";
import * as styles from "./styles";
import type { Todos as TodosType, FilterTypes } from "../../../types/todo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: TodosType;
  filter: FilterTypes;
  checkTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setItemsLeft: React.Dispatch<React.SetStateAction<number>>;
}

const Todos = ({
  todos,
  filter,
  checkTodo,
  deleteTodo,
  setItemsLeft,
}: Props) => {
  const { keys } = useTodos({ todos, filter, setItemsLeft });

  return (
    <Droppable droppableId="todo-list">
      {(provided) => (
        <styles.TodoList ref={provided.innerRef} {...provided.droppableProps}>
          {keys.map((key, index) => {
            return (
              <TodoItem
                key={key}
                completed={todos[key].completed}
                text={todos[key].text}
                id={key}
                checkTodo={checkTodo}
                deleteTodo={deleteTodo}
                index={index}
              />
            );
          })}
          {provided.placeholder}
        </styles.TodoList>
      )}
    </Droppable>
  );
};

export default Todos;
