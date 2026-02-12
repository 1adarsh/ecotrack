import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export default function CarbonChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "CO₂ kg/day",
        data: [12, 10, 9, 11, 8, 7, 6],
        borderColor: "#10B981",
        backgroundColor: "#34D399",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h2 className="text-xl font-semibold mb-4">
        📊 Weekly Carbon Footprint
      </h2>
      <Line data={data} />
      <p className="text-sm text-gray-500 mt-3">
        You saved <b>28 kg CO₂</b> this week 🌱
      </p>
    </div>
  );
}
