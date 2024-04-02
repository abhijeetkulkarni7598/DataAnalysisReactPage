import React from "react";
import { BarChart, Bar, XAxis, YAxis, LabelList } from "recharts";

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Aug", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Sep", uv: 3490, pv: 3800, amt: 2500 },
  { name: "Oct", uv: 2390, pv: 4300, amt: 2500 },
  { name: "Nov", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Dec", uv: 3490, pv: 4300, amt: 2500 }
];

export default function App() {
  

  const renderBar = (props) => {
    const { fill, x, y, width, height } = props;
    const radius = 5; // Set the desired border-radius value

    return (
      <rect
        rx={radius}
        ry={radius}
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
      />
    );
  };

  return (
    <BarChart width={700} height={300} data={data}>
      <XAxis dataKey="name" axisLine={false} interval="preserveStartEnd" />
      <Bar
        dataKey="uv"
        fill="#8884d8"
        barSize={30}
        shape={renderBar}
      />
    </BarChart>
  );
}