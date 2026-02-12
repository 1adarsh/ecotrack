export default function Groups() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">👨‍👩‍👧 Family Team</h1>

      <div className="bg-white rounded-xl p-4 shadow space-y-2">
        <p className="font-semibold">Family Score: 5,400 pts</p>
        <p>Monthly Goal: 6,000 pts</p>
        <div className="w-full bg-gray-200 h-2 rounded">
          <div className="bg-eco h-2 rounded w-[90%]" />
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow space-y-1">
        <p>👨 Dad — 2,100 pts</p>
        <p>👩 Mom — 1,800 pts</p>
        <p>🧒 You — 1,500 pts</p>
      </div>
    </div>
  );
}
