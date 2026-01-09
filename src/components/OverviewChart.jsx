import React from "react";
import { Bar, BarChart, Cell, ResponsiveContainer } from "recharts";

export default function OverviewChart({
  chartData,
  activeBarIndex = 3,
  activeColor = "#FFC107",
  nonActiveColor = "#FFF4D2",
}) {
  return (
    <div className="w-20.50 h-12 min-w-25 min-h-12">
      <ResponsiveContainer width="100%" height="100%" aspect={2}>
        <BarChart data={chartData}>
          <Bar dataKey="value" radius={[4, 4, 4, 4]}>
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === activeBarIndex ? activeColor : nonActiveColor}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
