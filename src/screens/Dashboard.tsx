import ThemeToggle from "../components/ThemeToogle";
export default function Dashboard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h1 className="text-2xl font-bold">👤 Hello, Priya</h1>
      <p className="text-gray-500 mb-4">
        Every small step counts
      </p>

      <div className="bg-eco text-green-600 rounded-xl p-4 text-center">
        <p className="text-sm">TODAY'S SCORE</p>
        <p className="text-4xl font-bold">720</p>
        <p className="text-sm">Better than 65% in Delhi</p>
      </div>


    <div className="p-4 space-y-4">
      
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Hello, Priya</h1>
        <ThemeToggle />
      </div>

    </div>  

      <div className="grid grid-cols-3 gap-3 mt-4">
        {["🗑️ Find Bins", "📊 Track CO₂", "🏆 Rewards"].map(item => (
          <button
            key={item}
            className="bg-gray-100 rounded-xl p-3 text-sm font-medium hover:bg-leaf"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}




