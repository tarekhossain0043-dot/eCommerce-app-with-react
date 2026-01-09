import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "12", value: 1200 },
  { name: "13", value: 1800 },
  { name: "14", value: 1500 },
  { name: "15", value: 2525 },
  { name: "16", value: 2100 },
  { name: "17", value: 2800 },
  { name: "18", value: 2400 },
];

const CustomTooltip = ({ active, payload, coordinate }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          position: "absolute",
          left: coordinate.x,
          top: coordinate.y,
          transform: "translate(-50%, -120%)",
          transition: "all 0.3s ease-out",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          zIndex: 100,
        }}
      >
        <div
          style={{
            backgroundColor: "#32374d",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "bold",
            textAlign: "center",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            position: "relative",
          }}
        >
          {`$${payload[0].value.toLocaleString()}`}

          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "8px solid #32374d",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: "-7px",
            }}
          ></div>
        </div>
      </div>
    );
  }
  return null;
};

const MyBarChart = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 200,
        paddingTop: "10px",
        position: "relative",
      }}
    >
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 14 }}
            dy={10}
          />
          <YAxis hide />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
            isAnimationActive={true}
            wrapperStyle={{ visibility: "visible", pointerEvents: "none" }}
          />

          <Bar
            dataKey="value"
            barSize={12}
            padding={[0, 10, 0, 10]}
            radius={[10, 10, 10, 10]}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#26d383" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyBarChart;
