'use client';

import { Chart, ChartConfiguration, registerables } from 'chart.js';
import React, { useEffect, useRef } from 'react';
import { darkOptions, lightOptions } from '@/app/components/DataChart/Themes';

import { months } from '@/app/helper/utils';
import { useTheme } from '@mui/material';

const DataChart = (props: ChartConfiguration) => {
  const { data, options } = props;
  const theme = useTheme();
  const themeOptions =
    theme.palette.mode === 'light' ? lightOptions : darkOptions;
  console.log(themeOptions);
  const chartRef = useRef<HTMLCanvasElement>(null);

  const labels = months({ count: 7 });
  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        ...props,
        options: {
          ...options,
          ...themeOptions,
        },
      });
      return () => {
        chart.destroy();
      };
    }
  }, [data, themeOptions]);
  return <canvas ref={chartRef} />;
};
Chart.register(...registerables);

export default DataChart;
