"use client";
import { useEffect, useState } from "react";

export default function Memory() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("memories") || "[]");
    setData(saved);
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Ký ức cộng đồng</h1>

      {data.map((item, i) => (
        <div key={i} className="border p-4 mb-4 rounded">
          <h2 className="font-bold">{item.name}</h2>
          <p>{item.address}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}