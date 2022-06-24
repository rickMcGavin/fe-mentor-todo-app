import { v4 as uuidv4 } from "uuid";
import type { Todos } from "../types/todo";

const generateTodo = (text: string): Todos => {
  const id = uuidv4();
  return {
    [id]: {
      completed: false,
      text,
      id,
    },
  };
};

export default generateTodo;
