export interface Todo {
  completed: boolean;
  text: string;
  id: string;
}

export interface Todos {
  [key: string]: Todo;
}

export type FilterTypes = "all" | "active" | "completed";
