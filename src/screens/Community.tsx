export default function Community() {
  const posts = [
    { user: "Priya", text: "Added new bin near Saket Metro", points: 50 },
    { user: "Delhi Challenge", text: "750 / 1000 bins reported", points: null },
    { user: "Rohan", text: "Clean bins at Select City Mall!", points: null },
  ];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">👥 Community</h1>

      {posts.map((p, i) => (
        <div key={i} className="bg-white rounded-xl p-4 shadow space-y-1">
          <p className="font-semibold">{p.user}</p>
          <p className="text-sm text-gray-600">{p.text}</p>
          {p.points && (
            <p className="text-eco text-sm">+{p.points} points</p>
          )}
        </div>
      ))}
    </div>
  );
}
