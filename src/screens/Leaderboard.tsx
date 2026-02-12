export default function Leaderboard() {
  const users = [
    { name: "Priya", points: 4820 },
    { name: "Rohan", points: 4210 },
    { name: "Amit", points: 3980 },
  ];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">🏙️ Delhi Leaderboard</h1>

      <div className="bg-white rounded-xl p-4 shadow">
        <p className="font-semibold">You: #45 — 2,150 pts</p>
      </div>

      {users.map((u, i) => (
        <div
          key={u.name}
          className="bg-white rounded-xl p-4 shadow flex justify-between"
        >
          <span>
            {i + 1}. {u.name}
          </span>
          <span className="font-semibold">{u.points}</span>
        </div>
      ))}
    </div>
  );
}
