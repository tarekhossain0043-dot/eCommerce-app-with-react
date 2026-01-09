import React from "react";
import {
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
} from "recharts";
export default function TiniChart() {
  const data = [
    { name: "A", value: 40 },
    { name: "B", value: 70 },
    { name: "C", value: 110 },
    { name: "D", value: 150 },
    { name: "E", value: 80 },
    { name: "F", value: 100 },
  ];
  return (
    <div className="w-ful h-75 bg-white p-5">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis hide dataKey="name" />
          <YAxis hide />
          <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={30}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.value === 150 ? "#FFD700" : "#FFF5D1"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
