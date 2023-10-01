import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: false,
    },
    legend: {
        display: false,
    }
  },
  responsive: true,
  barThickness: '35',
  borderRadius: '10',
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: false,
      grid:{
        display:false
      }
    },
    y: {
      stacked: false,
    },
  },
};

const labels = ['December'+"'"+"22", 'March'+"'"+"23", 'June'+"'"+"23", 'September'+"'"+"23"];

const data1 = {
  labels,
  datasets: [
    {  
      data: [19000,26000,21000,18000],
      backgroundColor: '#6CB4EE',
      stack: 'Stack 0',
    },
    {
      data: [13000,15000,17000,14000],
      backgroundColor: '#55DD33',
      stack: 'Stack 1',
    }
    ]
};

const data = [
  { value: 56, label: 'Category I' },
  { value: 22, label: 'Category II' },
  { value: 8, label: 'Category III' },
  { value: 16, label: 'Category IV' },
];

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 25,
  fontWeight: "bold"
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export function CreditExch() {
    return <Bar options={options} data={data1} />;
}

export function PlasticTypes() {
  return (
    <PieChart series={[{ data, innerRadius: 97.5}]} 
    sx={{"--ChartsLegend-rootOffsetX": "-10px","--ChartsLegend-itemMarkSize":"15px",'--ChartsLegend-rootSpacing': "25px"}} >
      <PieCenterLabel>56</PieCenterLabel>
    </PieChart>
  );
}
