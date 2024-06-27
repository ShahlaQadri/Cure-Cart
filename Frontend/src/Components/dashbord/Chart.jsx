import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  
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

const options = {
  responsive: true,
  aspectRatio: 2,
  plugins: {
    legend: {
        display:false,
      
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
function getLastSixMonthsNames() {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const months = [];
  const now = new Date();
  
  let currentMonth = now.getMonth();
  let currentYear = now.getFullYear();

  // Loop to get the last 6 months
  for (let i = 0; i < 6; i++) {
    months.push(      
       monthNames[currentMonth] // Get month name from monthNames array
    );

    // Move to the previous month
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
  }

  return months.reverse(); // Reverse to start from the oldest month
}





const months = getLastSixMonthsNames()
console.log(months);

export const BarChart = ({ data1, data2, title1, title2,bgcolor1,bgcolor2, labels = months }) => {
  console.log(data2)
  const data = {
    labels,
    datasets: [
      {
        label: title1,
        data: data1,
        backgroundColor: bgcolor1,
        barThickness: 30, // Adjust this value to increase the bar width
      },
      {
        label: title2,
        data: data2,
        backgroundColor: bgcolor2,
        barThickness: 30, // Adjust this value to increase the bar width
      },
    ],
  };
  
  return <Bar options={options} data={data} />;
};
