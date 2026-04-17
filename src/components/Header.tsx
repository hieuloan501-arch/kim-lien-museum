"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-800 text-white px-6 py-4 flex items-center justify-between shadow-md">

      {/* 🔥 LOGO BÊN TRÁI */}
      <Link href="/" className="text-xl font-bold">
        🏛 Kim Liên Museum
      </Link>

      {/* 🔥 MENU Ở GIỮA */}
      <nav className="flex gap-8 text-lg font-semibold absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" className="hover:text-yellow-300 transition">
          Trang chủ
        </Link>
        <Link href="/thong-tin-so" className="hover:text-yellow-300 transition">
          Thông tin số
        </Link>
        <Link href="/map" className="hover:text-yellow-300 transition">
          Bản đồ
        </Link>
      </nav>

      {/* 🔥 NÚT BÊN PHẢI */}
      <Link
        href="/ky-uc"
        className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-full font-bold shadow-lg transition hover:scale-105"
      >
        Đóng góp cộng đồng
      </Link>

    </header>
  );
}