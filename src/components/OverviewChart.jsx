import React from "react";
import { Bar, BarChart, Cell, ResponsiveContainer } from "recharts";

export default function OverviewChart({
  chartData,
  activeBarIndex = 3,
  activeColor = "#FFC107",
  nonActiveColor = "#FFF4D2",
}) {
  return (
    <div className="max-w-30 max-h-42.5 absolute bottom-3 right-4">
      <ResponsiveContainer aspect={2} width={120} height={170}>
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
