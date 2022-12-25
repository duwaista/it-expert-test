import { UserTodoItem } from "../types/todo";

const sortGroupedTodoByCompleteOrId = (list: UserTodoItem[]) => {
  const tmpList = [...list];

  return tmpList.sort((a, b) => {
    if (a.completedTodosCount !== b.completedTodosCount) {
      return b.completedTodosCount - a.completedTodosCount;
    } else {
      return b.userId - a.userId;
    }
  });
};

export default sortGroupedTodoByCompleteOrId;
