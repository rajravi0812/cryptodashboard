import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  labels: ['Eth', 'Btc', 'Doge', 'Sol', 'Bnb', 'Pi'],
  datasets: [
    {
      
      data: [200,100, 250, 50, 150, 250],
      backgroundColor: [
        '#cc0044',
        '#009900',
        '#cccc00',
        '#009999',
        '#661aff',
        '#e65c00',
      ],
      borderColor: [
        '#ff6666',
        '#4d79ff',
        '#ffcc66',
        '#00cc99',
        '#9966ff',
        '#ff8533',
      ],
      borderWidth: 0,
    },
  ],
};
const option =
{
  plugins:
  {
    legend:
    {
      position:'right',
      fullSize:true,
      labels:
      {
        padding:15,
        usePointStyle:true,
        pointStyle:'circle',
      }
    }
  }
}

export function Piegraph() {
  return <Pie className='graph' data={data} options={option} />;
}
