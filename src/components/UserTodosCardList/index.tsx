import React, { FC, useMemo } from "react";

import { container } from "./style.module.scss";
import { UserTodoItem } from "../../types/todo";
import UserTodosCardItem from "../UserTodosCardItem";

type Props = {
  list: UserTodoItem[];
};

const UserTodosCardList: FC<Props> = ({ list }) => {
  const userTodosList = useMemo(() => (
    list.map((user) => (
      <UserTodosCardItem
        key={user.userId}
        userId={user.userId}
        completedTodosCount={user.completedTodosCount}
        uncompletedTodosCount={user.uncompletedTodosCount}
        totalTodos={user.totalTodos}
        todos={user.todos}
      />
    ))
  ), [list]);

  return (
    <div className={container}>
      {userTodosList}
    </div>
  );
};

export default UserTodosCardList;
