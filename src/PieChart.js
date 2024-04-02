import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['', ''],
    datasets: [
      {
        data: [65, 35],
        backgroundColor: ['#ff69b4', '#a020f0'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '60%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    layout: {
      padding: {
        top: 20,
        bottom: 20,
      },
    },
  };

  const centerText = {
    display: true,
    text: '65%',
    color: '#333333',
    fontSize: 24,
    fontStyle: 'bold',
    fontFamily: 'Arial',
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Customers</h2>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>Customers that buy products</p>
      <div style={{ position: 'relative', width: '300px', margin: '0 auto' }}>
        <Pie data={data} options={options} plugins={[{ centerText }]} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontWeight:"bold" , fontSize: '14px', color: '#333333' }}>65%</span>
          <span style={{ fontSize: '14px', color: '#333333' }}>Total New</span>
          <span style={{ fontSize: '14px', color: '#333333' }}>Customers</span>
        </div>
      </div>
      
      </div>
  );
};

export default PieChart;