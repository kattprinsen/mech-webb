import React from 'react';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  ResponsiveContainer
}  from 'recharts';

const ChartRadar = ({ data }) => {
  return (
    <React.Fragment>
      <RadarChart width={730} height={250} outerRadius={90} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" stroke="#fff" />
      <PolarRadiusAxis />
      <Radar name="Kattprinsen" dataKey="A" stroke="#fff" fill="#fff" fillOpacity={0.6} />
      <Legend />
      </RadarChart>
    </React.Fragment>
  );
}

export default ChartRadar;
