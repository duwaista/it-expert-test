import { TodoItem, UsersTodoArrayLike } from "../types/todo";

// Удобства взамен на страдания
const groupTodosByUsers = (todos: TodoItem[]) => {
  // ToDo: Изменть формат данных на массив, убрать костыль для return
  const result: UsersTodoArrayLike = {};

  todos.forEach((todo) => {
    result[todo.userId] = {
      userId: todo.userId,
      completedTodosCount: 0,
      uncompletedTodosCount: 0,
      totalTodos: 0,
      todos: [...result[todo.userId]?.todos || [], todo],
    };
  });

  // :)
  Object.values(result).forEach((user) => {
    // Космическая алгоритмическая сложность
    const completedTodosCount = result[user.userId].todos.reduce((sum, current) => {
      if (current?.completed) sum += 1;
      return sum;
    }, 0);
    const totalTodos = user.todos.length;
    result[user.userId] = {
      ...result[user.userId],
      completedTodosCount,
      uncompletedTodosCount: totalTodos - completedTodosCount,
      totalTodos,
    };
  });

  // Изменил формат в последний момент :)
  return Object.values(result);
};

export default groupTodosByUsers;
