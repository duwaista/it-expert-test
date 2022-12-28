import React, { FC, useMemo } from "react";

import { UserTodoItem } from "../../types/todo";
import ChartBar from "../../common/Chart/ChartBar";

type Props = {
  list: UserTodoItem[];
};

const TodosChart: FC<Props> = ({ list }) => {
  const labels = useMemo(() => {
    return list.map((item) => `Пользователь ${item.userId}`);
  }, [list]);

  const datasets = useMemo(() => {
    return [
      {
        label: "Выполнено",
        data: list.map((item) => item.completedTodosCount),
        backgroundColor: "blue",
      },
      {
        label: "Всего",
        data: list.map((item) => item.totalTodos),
        backgroundColor: "red",
      },
    ];
  }, [list]);

  const data = useMemo(() => {
    return {
      labels,
      datasets,
    };
  }, [labels, datasets]);

  if (!list.length) return null;

  return <ChartBar data={data} />;
};

export default TodosChart;
