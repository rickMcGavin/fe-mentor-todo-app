import React from "react";
import Checkbox from "../../atoms/Checkbox";
import DeleteTodo from "../../atoms/DeleteTodo";
import TodoText from "../../atoms/TodoText";
import * as styles from "./styles";
import type { Todo } from "../../../types/todo";
import { Draggable } from "react-beautiful-dnd";

const TodoItem = ({
  text,
  id,
  index,
  completed,
  checkTodo,
  deleteTodo,
}: Todo & {
  checkTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <styles.TodoItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Checkbox id={id} completed={completed} checkTodo={checkTodo} />
          <TodoText completed={completed} text={text} />
          <DeleteTodo deleteTodo={() => deleteTodo(id)} />
        </styles.TodoItem>
      )}
    </Draggable>
  );
};

export default TodoItem;
