import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PredictionChart = ({ probabilities }) => {
  const labels = Object.keys(probabilities);
  const dataValues = Object.values(probabilities).map(val => val * 100);

  const data = {
    labels,
    datasets: [
      {
        label: "Probability (%)",
        data: dataValues,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;
};

export default PredictionChart;
