import React, { FC, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend, ChartOptions, ChartData,
} from "chart.js";
// eslint-disable-next-line import/no-unresolved
import { Bar } from "react-chartjs-2";

import { UserTodoItem } from "../../types/todo";

type Props = {
  list: UserTodoItem[];
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options: ChartOptions<"bar"> = {
  plugins: {
    title: {
      display: false,
    },
  },
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const TodosChart: FC<Props> = ({ list }) => {
  const datasets = useMemo(() => {
    return [
      {
        label: "Всего",
        data: list.map((item) => item.totalTodos),
        backgroundColor: "red",
      },
      {
        label: "Выполнено",
        data: list.map((item) => item.completedTodosCount),
        backgroundColor: "blue",
      },
    ];
  }, [list]);

  const data = useMemo(() => {
    return {
      labels: list.map((item) => `Пользователь ${item.userId}`),
      datasets,
    };
  }, [list, datasets]);

  if (!list.length) return null;

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TodosChart;
