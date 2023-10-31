"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Lun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mié",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jue",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Vie",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sáb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dom",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export function GráficoReservas() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Bar dataKey="total" fill="#0D0760" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
