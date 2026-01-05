import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#333752] text-white p-2.5 relative flex flex-col after:absolute after:w-4 after:h-4 after:bg-[#333752] after:rotate-45 after:content-[''] gap-0.5 after:-top-1 after:left-1 rounded-sm shadow-md text-center">
        <span className="font-bold mb-0 text-[12px] leading-4.5">{`${payload[0].value} Orders`}</span>
        <span className="text-xs text-gray-400">May 22, 8:00AM</span>
      </div>
    );
  }
  return null;
};

export default function MainAnalytsChart() {
  const data = [
    { time: "4am", current: 0, previous: 10 },
    { time: "5am", current: 8, previous: 8 },
    { time: "6am", current: 15, previous: 18 },
    { time: "7am", current: 10, previous: 25 },
    { time: "8am", current: 25, previous: 26 },
    { time: "9am", current: 35, previous: 32 },
    { time: "10am", current: 30, previous: 12 },
    { time: "11am", current: 32, previous: 20 },
    { time: "12am", current: 50, previous: 35 },
    { time: "1pm", current: 45, previous: 40 },
    { time: "2pm", current: 25, previous: 45 },
    { time: "3pm", current: 25, previous: 50 },
  ];
  return (
    <div className="w-full h-75 min-w-192.25 min-h-75 bg-white">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f0f0f0"
          />
          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={false}
            // position={{ y: 50 }}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#e2e8f0"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="current"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 6, fill: "#fff", stroke: "#2563eb", strokeWidth: 3 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
