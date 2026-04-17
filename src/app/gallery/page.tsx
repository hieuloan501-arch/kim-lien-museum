"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Memory {
  name: string;
  content: string;
  image?: string;
}

export default function GalleryPage() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "tieu-su";

  const [memories, setMemories] = useState<Memory[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("memories");
    if (data) setMemories(JSON.parse(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
        Không gian tư liệu số
      </h1>

      {/* ================= TIỂU SỬ ================= */}
      {tab === "tieu-su" && (
        <div className="space-y-10">
          <Section title="Tiểu sử chung" text="Chủ tịch Hồ Chí Minh sinh năm 1890 tại Nghệ An..." imgs={[1,2,3,4]} />
          <Section title="Gia đình Bác" text="Gia đình Bác có truyền thống hiếu học..." imgs={[5,6,7,8]} />
          <Section title="Sự nghiệp cách mạng" text="Người ra đi tìm đường cứu nước năm 1911..." imgs={[9,10,11,12]} />
          <Section title="Sự nghiệp viết lách" text="Bác là nhà văn hóa lớn..." imgs={[13,14,15,16]} />
        </div>
      )}

      {/* ================= QUÊ NỘI ================= */}
      {tab === "que-noi" && (
        <Section
          title="Quê nội - Làng Sen"
          text="Làng Sen là nơi Bác lớn lên..."
          imgs={[17,18,19,20]}
        />
      )}

      {/* ================= QUÊ NGOẠI ================= */}
      {tab === "que-ngoai" && (
        <Section
          title="Quê ngoại - Hoàng Trù"
          text="Hoàng Trù là nơi Bác sinh ra..."
          imgs={[21,22,23,24]}
        />
      )}

      {/* ================= KÝ ỨC ================= */}
      {tab === "ky-uc" && (
        <div className="space-y-10">

          {/* MỞ ĐẦU */}
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Ký ức về Bác Hồ
            </h2>

            <p className="italic text-gray-600 max-w-2xl mx-auto">
              "Bác Hồ luôn sống trong trái tim mỗi người dân Việt Nam..."
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[1,2,3,4].map(i => (
                <img
                  key={i}
                  src={`https://picsum.photos/300/200?random=${i}`}
                  className="rounded-xl"
                />
              ))}
            </div>
          </div>

          {/* DỮ LIỆU NGƯỜI DÙNG */}
          <div className="space-y-6">

            {memories.length === 0 && (
              <p className="text-center text-gray-500">
                Chưa có đóng góp nào. Hãy là người đầu tiên chia sẻ!
              </p>
            )}

            {memories.map((m, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-600"
              >
                <p className="italic mb-4">"{m.content}"</p>

                {m.image && (
                  <img
                    src={m.image}
                    className="rounded-xl mb-4"
                  />
                )}

                <p className="text-right font-bold text-green-700">
                  - {m.name} chia sẻ -
                </p>
              </div>
            ))}

          </div>

        </div>
      )}

    </div>
  );
}

/* COMPONENT DÙNG CHUNG - PHẢI ĐẶT NGOÀI */
function Section({ title, text, imgs }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-green-700 mb-3">
        {title}
      </h2>

      <p className="mb-4 text-gray-700">
        {text}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imgs.map((i: number) => (
          <img
            key={i}
            src={`https://picsum.photos/300/200?random=${i}`}
            className="rounded-xl hover:scale-105 transition"
          />
        ))}
      </div>
    </div>
  );
}