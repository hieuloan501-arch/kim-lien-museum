"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  

  // 🌄 DANH SÁCH ẢNH NỀN
  const backgrounds = [
    "https://cdn3.ivivu.com/2024/09/lang-sen-que-bac-ivivu-1.png",
    "https://vanminh76.vn/wp-content/uploads/2025/05/ChatGPT-Image-May-15-2025-03_02_50-PM.webp",
    "https://resource.kinhtedothi.vn/2021/12/24/dji-0148.jpg"
  ];

  const [bgIndex, setBgIndex] = useState(0);

  // 🔄 Đổi nền tự động
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]); // Thêm dependency để an toàn

  // 📦 4 mục chính
  const items = [
    {
      title: "Tiểu sử Bác Hồ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0ZMUKPsqkAU7SxNHelpizlopkLS2z3w1lA&s",
      link: "/gallery?tab=tieu-su"
    },
    {
      title: "Quê nội Bác",
      img: "https://lamdong.gov.vn/HOME/news/hotnews/SiteAssets/SitePages/1-1747273319703.jpg",
      link: "/gallery?tab=que-noi"
    },
    {
      title: "Quê ngoại Bác",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_wjH4GuYyQreSFjgFETOa2iEKwvIWhay9_w&s",
      link: "/gallery?tab=que-ngoai"
    },
    {
      title: "Ký ức cộng đồng", // <-- ĐÃ THÊM DẤU PHẨY Ở ĐÂY
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEoXE9QTrUXK-Kcq2HAEa1TsclisRXtWm5Q&s",
      link: "/gallery?tab=ky-uc"
    }
  ];

  return (
    <div className="min-h-screen relative text-white overflow-x-hidden">

      {/* 🌄 BACKGROUND SLIDER */}
      <div className="fixed inset-0 -z-10 bg-black">
        {backgrounds.map((bg, index) => (
          <img
            key={index}
            src={bg}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === bgIndex ? "opacity-100" : "opacity-0"
            }`}
            alt="Background"
          />
        ))}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* 🏆 TITLE */}
      <div className="text-center mt-20 px-6">
        <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">
          Di sản số Kim Liên
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-200 drop-shadow-md">
          Hành trình số hóa cuộc đời Chủ tịch Hồ Chí Minh và những ký ức trường tồn tại mảnh đất Nam Đàn
        </p>
      </div>

      {/* 🟩 4 KHUNG */}
      <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
        {items.map((item, i) => (
          <Link key={i} href={item.link}>
            <div className="relative h-72 rounded-3xl overflow-hidden border-4 border-green-700 shadow-xl group cursor-pointer">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-xl font-bold text-green-300 drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}