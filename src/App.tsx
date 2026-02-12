import Dashboard from "./screens/Dashboard";
import BinMap from "./screens/BinMap";
import CarbonChart from "./screens/CarbonChart";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 space-y-6">
      <Dashboard />
      <BinMap />
      <CarbonChart />
    </div>
  );
}
