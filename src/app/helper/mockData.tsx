import { months } from '@/app/helper/utils';

export const lineChartData = {
  labels: months({ count: 12 }),
  datasets: [
    {
      label: 'Transactions',
      data: [65, 59, 80, 81, 56, 55, 60, 49, 112, 72, 52, 43],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

export const doughnutChartData = [
  {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Transaction Dataset',
        data: [105, 50, 100],
        backgroundColor: [
          'rgb(248,131,121)',
          'rgb(0,191,255)',
          'rgb(178, 217, 24)',
        ],
        hoverOffset: 4,
      },
    ],
  },
  {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Transaction Dataset',
        data: [30, 50, 200],
        backgroundColor: [
          'rgb(248,131,121)',
          'rgb(0,191,255)',
          'rgb(178, 217, 24)',
        ],
        hoverOffset: 4,
      },
    ],
  },
  {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Transaction Dataset',
        data: [10, 150, 100],
        backgroundColor: [
          'rgb(248,131,121)',
          'rgb(0,191,255)',
          'rgb(178, 217, 24)',
        ],
        hoverOffset: 4,
      },
    ],
  },
  {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Transaction Dataset',
        data: [180, 150, 100],
        backgroundColor: [
          'rgb(248,131,121)',
          'rgb(0,191,255)',
          'rgb(178, 217, 24)',
        ],
        hoverOffset: 4,
      },
    ],
  },
];
