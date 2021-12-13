import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./chart.css";
export default function Chart() {
  const data = [
    {
      name: "Jan",
  'Active user': 4000,
     
    },
    {
        name: "Feb",
    'Active user': 1000,
       
      },
      {
        name: "Mar",
    'Active user': 2000,
       
      },
      {
        name: "Apr",
    'Active user': 5000,
       
      },
      {
        name: "May",
    'Active user':4500,
       
      },
      {
        name: "Jun",
    'Active user': 1000,
       
      },
      {
        name: "Jul",
    'Active user': 5000,
       
      },
      {
        name: "Aug",
    'Active user': 3000,
       
      },
      {
        name: "Sep",
    'Active user': 2500,
       
      },
      {
        name: "Oct",
    'Active user': 2300,
       
      },
      {
        name: "Nov",
    'Active user': 3000,
       
      },
      {
        name: "Dec",
    'Active user': 3000,
       
      },
  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Analytcis</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
        <XAxis dataKey="name" stroke="tomato"/>
        <Line type="monotone" dataKey="Active user" stroke="tomato" />
        </LineChart>
        
      </ResponsiveContainer>{" "}
    </div>
  );
}
