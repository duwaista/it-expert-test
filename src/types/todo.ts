export type TodoItem = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export type UserTodoItem = {
  completedTodosCount: number;
  uncompletedTodosCount: number;
  totalTodos: number;
  userId: number;
  todos: TodoItem[];
};

export type UsersTodoArrayLike = {
  [key: number]: UserTodoItem;
};
