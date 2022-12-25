import React, { FC, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
// eslint-disable-next-line import/no-unresolved
import { Bar } from "react-chartjs-2";

type Props = {
  data: ChartData<"bar">;
  options?: ChartOptions<"bar">;
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const defaultOptions: ChartOptions<"bar"> = {
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

const Chart: FC<Props> = ({
  data,
  options = {},
}) => {
  const chartOptions = useMemo(() => {
    return { ...defaultOptions, ...options };
  }, [options]);

  return (
    <div>
      <Bar
        data={data}
        options={chartOptions}
      />
    </div>
  );
};

export default Chart;
