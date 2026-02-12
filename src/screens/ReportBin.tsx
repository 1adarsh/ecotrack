import { useState } from "react";

export default function ReportBin() {
  const [status, setStatus] = useState("available");

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">🗑️ Report a Bin</h1>

      <div className="bg-white rounded-xl p-4 shadow space-y-3">
        <label className="block text-sm font-medium">Bin Status</label>
        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
          className="w-full border rounded-lg p-2"
        >
          <option value="available">🟢 Available</option>
          <option value="partial">🟡 Half Full</option>
          <option value="full">🔴 Full</option>
          <option value="missing">❓ Missing</option>
        </select>

        <label className="block text-sm font-medium">Add Photo</label>
        <input type="file" className="w-full" />

        <label className="block text-sm font-medium">Notes</label>
        <textarea
          className="w-full border rounded-lg p-2"
          placeholder="Clean, accessible, damaged, etc."
        />

        <button className="w-full bg-eco text-white py-2 rounded-lg">
          Submit Report
        </button>
      </div>
    </div>
  );
}
