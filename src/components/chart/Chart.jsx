import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./chart.css";
export default function Chart({title,data,datakey,grid}) {
  

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
        <XAxis dataKey={datakey} stroke="tomato"/>
        <Line type="monotone" dataKey="Active user" stroke="tomato" />
        <Tooltip />
        {grid && <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />}
        </LineChart>
        
      </ResponsiveContainer>{" "}
    </div>
  );
}
