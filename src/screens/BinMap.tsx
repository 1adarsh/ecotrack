import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "YOUR_MAPBOX_TOKEN";

export default function BinMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [77.209, 28.6139], // Delhi
      zoom: 13,
    });

    new mapboxgl.Marker({ color: "#10B981" })
      .setLngLat([77.21, 28.614])
      .setPopup(new mapboxgl.Popup().setText("🟢 Available Bin"))
      .addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <div className="p-4 font-semibold">🗺️ Bin Finder</div>
      <div ref={mapRef} className="h-64 w-full" />
    </div>
  );
}
