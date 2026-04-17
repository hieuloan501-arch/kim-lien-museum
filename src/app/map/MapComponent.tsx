"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

const locations = [
  {
    name: "Quê nội - Làng Sen",
    lat: 18.6742,
    lng: 105.5546,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmGlR5nHB79t6qJhIUg2Jzg53Vl1UFgcLpA&s",
    vi: "Nơi Bác Hồ lớn lên với tuổi thơ giản dị.",
    en: "The childhood home of President Ho Chi Minh."
  },
  {
    name: "Quê ngoại - Hoàng Trù",
    lat: 18.6768,
    lng: 105.5689,
    img: "https://vanminh76.vn/wp-content/uploads/2025/05/ChatGPT-Image-May-15-2025-03_02_50-PM.webp",
    vi: "Nơi Bác Hồ được sinh ra.",
    en: "The birthplace of President Ho Chi Minh."
  },
  {
    name: "Mộ bà Hoàng Thị Loan",
    lat: 18.7082,
    lng: 105.5843,
    img: "https://bna.1cdn.vn/2024/06/01/dji_0939-053ae8ce55ec5ebe3d9a08b49fdc1ccf.jpg",
    vi: "Nơi an nghỉ của thân mẫu Bác.",
    en: "The resting place of Ho Chi Minh's mother."
  }
];

export default function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null);

  const routeRefs = useRef<any>({
    r1: null,
    r2: null,
    r3: null,
  });

  const [activeRoutes, setActiveRoutes] = useState({
    r1: false,
    r2: false,
    r3: false,
  });

  useEffect(() => {
    if (!mapRef.current) return;
    if ((mapRef.current as any)._leaflet_id) return;

    const map = L.map(mapRef.current).setView([18.68, 105.56], 13);

    // 🌍 Satellite (đẹp hơn)
    L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution: "Tiles © Esri"
  }
).addTo(map);

     // Lớp vệ tinh
const satellite = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
);

// Lớp label (chữ)
const labels = L.tileLayer(
  "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
);

satellite.addTo(map);
labels.addTo(map);

    // 🔴 Marker đỏ
    const redIcon = new L.Icon({
      iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    locations.forEach((loc) => {
      L.marker([loc.lat, loc.lng], { icon: redIcon })
        .addTo(map)
        .bindPopup(`
          <div style="width:200px">
            <img src="${loc.img}" style="width:100%; border-radius:10px"/>
            <h3 style="font-weight:bold">${loc.name}</h3>
            <p><b>VI:</b> ${loc.vi}</p>
            <p><b>EN:</b> ${loc.en}</p>
          </div>
        `);
    });

    // 🎯 HÀM TẠO ROUTE
    const createRoute = (a: any, b: any) =>
      (L as any).Routing.control({
        waypoints: [L.latLng(a.lat, a.lng), L.latLng(b.lat, b.lng)],
        addWaypoints: false,
        draggableWaypoints: false,
        createMarker: () => null,
        show: false, // ❌ không hiện bảng bên phải
        lineOptions: {
          styles: [{ color: "#22c55e", weight: 5 }]
        }
      }).addTo(map);

    // 🔘 TOGGLE ROUTE
    const toggleRoute = (key: "r1" | "r2" | "r3") => {
      const pairs: any = {
        r1: [locations[0], locations[1]],
        r2: [locations[1], locations[2]],
        r3: [locations[0], locations[2]],
      };

      if (routeRefs.current[key]) {
        map.removeControl(routeRefs.current[key]);
        routeRefs.current[key] = null;
        setActiveRoutes((prev) => ({ ...prev, [key]: false }));
      } else {
        routeRefs.current[key] = createRoute(...pairs[key]);
        setActiveRoutes((prev) => ({ ...prev, [key]: true }));
      }
    };

    // expose ra ngoài
    (window as any).toggleRoute = toggleRoute;

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="p-4 space-y-4">

      {/* MAP */}
      <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl border">
        <div ref={mapRef} className="w-full h-full" />
      </div>

      {/* 🔘 3 NÚT ROUTE */}
      <div className="flex flex-wrap justify-center gap-3">

        <button
          onClick={() => (window as any).toggleRoute("r1")}
          className={`px-5 py-2 rounded-full text-white ${
            activeRoutes.r1 ? "bg-red-500" : "bg-green-600"
          }`}
        >
          Quê nội → Quê ngoại
        </button>

        <button
          onClick={() => (window as any).toggleRoute("r2")}
          className={`px-5 py-2 rounded-full text-white ${
            activeRoutes.r2 ? "bg-red-500" : "bg-green-600"
          }`}
        >
          Quê ngoại → Mộ bà Loan
        </button>

        <button
          onClick={() => (window as any).toggleRoute("r3")}
          className={`px-5 py-2 rounded-full text-white ${
            activeRoutes.r3 ? "bg-red-500" : "bg-green-600"
          }`}
        >
          Quê nội → Mộ bà Loan
        </button>

      </div>
    </div>
  );
}