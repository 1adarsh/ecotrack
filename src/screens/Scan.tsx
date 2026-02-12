import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function Scan() {
  const [data, setData] = useState<string | null>(null);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">📸 Scan Product</h1>

      <div className="rounded-xl overflow-hidden border">
        <BarcodeScannerComponent
          width="100%"
          height={250}
          onUpdate={(_, result) => {
            if (result) setData(result.getText());
          }}
        />
      </div>

      {data ? (
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Scanned Code</p>
          <p className="font-mono text-lg">{data}</p>
          <button className="mt-3 bg-eco text-white px-4 py-2 rounded-lg">
            View Sustainability Score
          </button>
        </div>
      ) : (
        <p className="text-gray-400 text-sm">
          Align barcode in the frame
        </p>
      )}
    </div>
  );
}
