import { RechartsDevtools } from "@recharts/devtools";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  Legend,
  YAxis,
} from "recharts";

const CustomTooltip = ({ active, payload, coordinate }) => {
  if (active && payload && payload.length) {
    const { date, current } = payload[0].payload;
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
        {/* <span className="font-bold mb-0 text-[12px] leading-4.5">{`${payload[0].value} Orders`}</span>
        <span className="text-xs text-gray-400">May 22, 8:00AM</span> */}
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
          <span className="font-bold block mb-0 text-[12px] leading-4.5">
            {current} Orders
          </span>
          <span className="text-xs text-gray-400">{date}</span>
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

export default function MainAnalytsChart() {
  const data = [
    { time: "4am", current: 0, previous: 10, date: "May 22, 8:00AM" },
    { time: "5am", current: 8, previous: 8, date: "May 23, 9:00AM" },
    { time: "6am", current: 15, previous: 18, date: "May 24, 9:20" },
    { time: "7am", current: 10, previous: 25, date: "May 24, 9:20" },
    { time: "8am", current: 25, previous: 26, date: "May 24, 9:20" },
    { time: "9am", current: 35, previous: 32, date: "May 24, 9:20" },
    { time: "10am", current: 30, previous: 12, date: "May 24, 9:20" },
    { time: "11am", current: 32, previous: 20, date: "May 24, 9:20" },
    { time: "12am", current: 50, previous: 35, date: "May 24, 9:20" },
    { time: "1pm", current: 45, previous: 40, date: "May 24, 9:20" },
    { time: "2pm", current: 25, previous: 45, date: "May 24, 9:20" },
    { time: "3pm", current: 25, previous: 50, date: "May 24, 9:20" },
  ];
  return (
    <div className="w-full h-80 mt-15 pb-5 bg-white">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          // layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 2 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f0f0f0"
          />
          <XAxis
            dataKey="time"
            axisLine={false}
            tickMargin={5}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickMargin={15}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={true}
            // position={{ y: 50 }}
          />
          <Line
            type="linear"
            dataKey="previous"
            stroke="#e2e8f0"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="linear"
            dataKey="current"
            stroke="#2563eb"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 6,
              fill: "#fff",
              stroke: "#2563eb",
              strokeWidth: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
