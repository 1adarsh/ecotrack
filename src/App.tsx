import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import BinMap from "./screens/BinMap";
import CarbonChart from "./screens/CarbonChart";
import Scan from "./screens/Scan";
import Profile from "./screens/Profile";
import BottomNav from "./components/BottomNav";
import ScanResult from "./screens/ScanResult";
import Rewards from "./screens/Rewards";
import Leaderboard from "./screens/Leaderboard";
import Community from "./screens/Community";
import Groups from "./screens/Groups";
import ReportBin from "./screens/ReportBin";
import ThemeToggle from "./components/ThemeToogle";



export default function App() {
  return (
    <div className="pb-16 min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/map" element={<BinMap />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/scan/result" element={<ScanResult />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/carbon" element={<CarbonChart />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/leaderboard" element={<Leaderboard />} /> 
        <Route path="/community" element={<Community />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/report" element={<ReportBin />} />
        <Route path="/theme" element={<ThemeToggle />} />
      </Routes>

      <BottomNav />
    </div>
  );
}
