import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const SimpleBarChart = ({ data }) => {
  return (
    <React.Fragment>
      <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="subject" />
      <YAxis dataKey="fullMark" />
      <Tooltip />
      Legend />
      <Bar dataKey="A" fill="#fff" />
      <Bar dataKey="B" fill="black" />
      </BarChart>
    </React.Fragment>
  );
}

export default SimpleBarChart;
