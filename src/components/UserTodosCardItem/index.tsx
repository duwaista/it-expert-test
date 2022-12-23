import React, { FC, useMemo } from "react";

import { UserTodoItem } from "../../types/todo";
import {
  container,
  titleBox,
  completed,
  uncompleted,
  todosBox,
  todoItem,
  titleText,
} from "./style.module.scss";

type Props = UserTodoItem;

const UserTodosCardItem: FC<Props> = ({
  userId,
  completedTodosCount,
  uncompletedTodosCount,
  todos,
}) => {
  const todosList = useMemo(() => {
    return todos.map((todo) => (
      <li className={todoItem} key={todo.id}>{todo.title}</li>
    ));
  }, [todos]);

  return (
    <div className={container}>
      <div className={titleBox}>
        <span className={titleText}>{`Пользователь ${userId}`}</span>
        <div>
          <span className={completed}>{completedTodosCount}</span>
          /
          <span className={uncompleted}>{uncompletedTodosCount}</span>
        </div>
      </div>
      <div className={todosBox}>
        {todosList}
      </div>
    </div>
  );
};

export default UserTodosCardItem;
