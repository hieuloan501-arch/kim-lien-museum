"use client";

import dynamic from 'next/dynamic';

// Tải MapComponent một cách "động" và tắt SSR (Server Side Rendering)
// Điều này giúp tránh lỗi "window is not defined"
const MapComponent = dynamic(() => import('./MapComponent'), { 
  ssr: false,
  loading: () => (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <p className="text-xl font-medium text-green-700 animate-pulse">
        Đang tải bản đồ di tích...
      </p>
    </div>
  )
});

export default function Page() {
  return (
    <div className="w-full h-screen">
      <MapComponent />
    </div>
  );
}