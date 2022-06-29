export interface Todo {
  completed: boolean;
  text: string;
  id: string;
  index: number;
}

export interface Todos {
  [key: string]: Todo;
}

export type FilterTypes = "all" | "active" | "completed";
