import React from 'react';
import './Charts.css';

import RadarChart from './RadarChart/RadarChart';

const radarData = [
  {
    subject: 'React',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Javascript',
    A: 140,
    B: 145,
    fullMark: 150,
  },
  {
    subject: 'Html',
    A: 150,
    B: 150,
    fullMark: 150,
  },
  {
    subject: 'Css',
    A: 130,
    B: 135,
    fullMark: 150,
  },
  {
    subject: 'Git',
    A: 100,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Node',
    A: 140,
    B: 135,
    fullMark: 150,
  }
]

const Charts = () => {

  return (
    <div className="charts-container">
      <div className="radar-chart-container">
      <h1>Radar Chart</h1>
        <RadarChart data={radarData} />
      </div>
    </div>
  );
}

export default Charts;
