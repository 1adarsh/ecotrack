export default function Rewards() {
  const badges = [
    { name: "Bin Hero", icon: "🗑️" },
    { name: "Weekly Streak", icon: "🔥" },
    { name: "Scan Master", icon: "📸" },
    { name: "Green Starter", icon: "🌱" },
    { name: "Recycling Pro", icon: "♻️" },
    { name: "Daily Walker", icon: "🚶" },
  ];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">🏆 Achievements</h1>

      <div className="bg-white rounded-xl p-4 shadow">
        <p className="font-semibold">Total Points</p>
        <p className="text-3xl font-bold text-eco">2,150 🔥</p>
        <p className="text-sm text-gray-500">Level 7 — Eco Warrior</p>
        <div className="w-full bg-gray-200 h-2 rounded mt-2">
          <div className="bg-eco h-2 rounded w-[80%]" />
        </div>
      </div>

      <h2 className="font-semibold">Badges Earned</h2>
      <div className="grid grid-cols-3 gap-3">
        {badges.map(b => (
          <div
            key={b.name}
            className="bg-white rounded-xl shadow p-4 text-center space-y-1"
          >
            <div className="text-2xl">{b.icon}</div>
            <p className="text-xs font-medium">{b.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
