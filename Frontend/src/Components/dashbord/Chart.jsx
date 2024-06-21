import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Scale,
  scales,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
        display:true,
      
    },
    title: {
      display: false,
      
    },
  },
  scales:{
    y:{
        beginAtZero:true,
        grid:{
            display:false
        }
    },
    x:{
        beginAtZero:true,
        grid:{
            display:false
        }
    }

  }
};

const months = ["January", "February", "March", "April", "May", "June", "July"];

export const BarChart = ({ data1, data2, title1, title2,bgcolor1,bgcolor2, labels = months }) => {
  const data = {
    labels,
    datasets: [
      {
        label: title1,
        data: data1,
        backgroundColor:bgcolor1,
      },
      {
        label: title2,
        data: data2,
        backgroundColor: bgcolor2,
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
