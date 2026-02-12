export default function ScanResult() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">🥤 Bisleri Water Bottle</h1>

      <div className="bg-white rounded-xl p-4 shadow space-y-2">
        <p className="font-semibold">Sustainability Score: 5/10</p>
        <p>CO₂: 82g • Plastic: 25g PET</p>
        <p>Recyclable: ✅ Yes</p>
        <p className="text-green-600 font-medium">
          Better alternative: Steel Bottle (80% less CO₂)
        </p>
      </div>
    </div>
  );
}
