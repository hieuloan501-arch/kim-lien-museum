"use client";
import { useState } from "react";

export default function ThongTinSo() {
  const [mode, setMode] = useState("card");
  const [active, setActive] = useState<number | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const data = [
    {
      title: "Tiểu sử Bác Hồ",
      img: "https://phunuvietnam.mediacdn.vn/thumb_w/1098/179072216278405120/2021/2/5/anhhcm-16125276560891883717156-39-0-352-500-crop-16125278924161225007805.jpg",
      content:
        "Chủ tịch Hồ Chí Minh sinh năm 1890 tại Nghệ An. Người đã dành cả cuộc đời cho sự nghiệp giải phóng dân tộc."
    },
    {
      title: "Quê nội - Làng Sen",
      img: "https://bizweb.dktcdn.net/100/006/093/articles/lang-sen-que-bac.jpg?v=1619666141447",
      content:
        "Làng Sen (hay làng Kim Liên) thuộc xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An, là quê nội của Chủ tịch Hồ Chí Minh. Nơi đây lưu giữ ngôi nhà tranh 5 gian mộc mạc, nơi Bác Hồ từng sống thời thơ ấu (1901-1906), cùng các di tích như ao sen, giếng Cốc và đền làng Sen"
    },
    {
      title: "Quê ngoại - Hoàng Trù",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCCF6KeW_bSEUs_0ANtyfpATs5z4IPcxQgCQ&s",
      content:
        "Quê ngoại Hoàng Trù (hay làng Chùa) tọa lạc tại xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An, là nơi Chủ tịch Hồ Chí Minh cất tiếng khóc chào đời và sống 5 năm tuổi ấu thơ (1890-1895). Cụm di tích rộng khoảng 3500 mét vuông, bao gồm nhà thờ chi nhánh họ Hoàng Xuân, nhà cụ Hoàng Đường (ông ngoại Bác) và ngôi nhà tranh đơn sơ nơi Bác Hồ sinh ra."
    },
    {
      title: "Ký ức cộng đồng",
      img: "https://spirit.vietnamairlines.com/wp-content/uploads/2024/03/ANH-2.jpg",
      content:
        "Nơi lưu giữ những câu chuyện, hình ảnh và cảm xúc của mọi người về Bác Hồ."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white p-6">

      {/* TIÊU ĐỀ */}
      <h1 className="text-4xl font-bold text-center text-green-700 mb-4">
        Không gian tư liệu số
      </h1>

      {/* CHỌN CHẾ ĐỘ */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setMode("card")}
          className="bg-green-600 text-white px-4 py-2 rounded-full"
        >
          Flashcard
        </button>
        <button
          onClick={() => setMode("timeline")}
          className="bg-green-600 text-white px-4 py-2 rounded-full"
        >
          Timeline
        </button>
        <button
          onClick={() => setMode("gallery")}
          className="bg-green-600 text-white px-4 py-2 rounded-full"
        >
          Gallery
        </button>
      </div>

      {/* ================= FLASHCARD ================= */}
      {mode === "card" && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => setActive(index === active ? null : index)}
              className="cursor-pointer bg-white rounded-2xl shadow-xl hover:scale-105 transition overflow-hidden"
            >
              <img src={item.img} className="w-full h-40 object-cover" />
              <div className="p-4 text-center">
                <h2 className="font-bold text-green-700">
                  {item.title}
                </h2>

                {active === index && (
                  <p className="text-sm mt-2 text-gray-600">
                    {item.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ================= TIMELINE ================= */}
      {mode === "timeline" && (
        <div className="space-y-6 max-w-2xl mx-auto">
          {[
            { year: "1890", text: "Sinh ra tại Nghệ An" },
            { year: "1911", text: "Ra đi tìm đường cứu nước" },
            { year: "1945", text: "Đọc Tuyên ngôn độc lập" },
            { year: "1969", text: "Từ trần" }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-green-50 p-4 rounded-xl shadow-md border-l-4 border-green-700 hover:shadow-xl transition"
            >
              <h3 className="font-bold text-green-800 text-lg">
                {item.year}
              </h3>

              <p className="text-gray-700 mt-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      )}

            {/* ================= GALLERY ================= */}
      {mode === "gallery" && (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCq_eLg2rJGNtJErzT_9O3_2w20pcX1rTQA&s",
              "https://dbndnghean.vn/dbndna-media/212/bac_ho_ve_tham_hoang_tru_que_ngoai_nam_19615660205_2122021.jpg",
              "https://bna.1cdn.vn/2024/05/15/mot-goc-lang-sen-xa-kim-lien-huyen-nam-dan.-anh-sach-nguyen(1).jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRrtBHd2s9PU5C9sLrNEFws8GODA4-HNiXA&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPSZ4EMup8y_8H9DDbpxFlAsJrYV0aK1kUjQ&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIXRMMIKStb-PC_Z5Ht64oF7wwUq9XZJSIQ&s"
            ].map((link, index) => (
              <img
                key={index}
                src={link}
                onClick={() => setSelected(link)}
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/300/200";
                }}
                className="rounded-xl w-full h-48 object-cover cursor-pointer hover:scale-105 transition duration-300 shadow-md"
              />
            ))}
          </div>

          {selected && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              onClick={() => setSelected(null)}
            >
              <img
                src={selected}
                className="max-w-[90%] max-h-[80%] rounded-xl shadow-2xl"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}