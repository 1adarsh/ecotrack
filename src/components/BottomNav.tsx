import { NavLink } from "react-router-dom";

export default function BottomNav() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col items-center text-xs ${
      isActive ? "text-eco" : "text-gray-400"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
      <NavLink to="/" className={linkClass}>🏠 Home</NavLink>
      <NavLink to="/map" className={linkClass}>🗺️ Map</NavLink>
      <NavLink to="/scan" className={linkClass}>📸 Scan</NavLink>
      <NavLink to="/profile" className={linkClass}>👤 Profile</NavLink>
    </nav>
  );
}
