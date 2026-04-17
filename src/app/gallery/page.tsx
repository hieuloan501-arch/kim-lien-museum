"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

interface Memory {
  name: string;
  content: string;
  image?: string;
}

// 1. Tách nội dung chính ra thành một Component riêng
function GalleryContent() {
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
          <Section 
            title="Tiểu sử chung" 
            text="Chủ tịch Hồ Chí Minh sinh năm 1890 tại Nghệ An..." 
            imgs={[
              "https://inkythuatso.com/uploads/thumbnails/800/2023/03/nhung-hinh-anh-ve-bac-ho-dep-nhat-2-04-11-49-18.jpg?w=1130",
              "https://cdn.nbtv.vn/upload/news/5_2020/1_08593319052020.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj3ZRe-FBTsQrJUVJ-xnMoS8LweDWpc9MMXg&s",
              "https://inkythuatso.com/uploads/thumbnails/800/2023/03/hinh-anh-bac-ho-cuoi-1-04-11-51-12.jpg?w=1130"
            ]} 
          />

          <Section 
            title="Gia đình Bác" 
            text="Gia đình Bác có truyền thống hiếu học..." 
            imgs={[
              "https://baoquankhu4.com.vn/upload/18269/fck/files/Gia%20dinh%20bac.png",
              "https://phuongnam.vanhoavaphattrien.vn/uploads/images/2021/12/15/images1768118-8-1639552864.jpg"
            ]} 
          />

          <Section 
            title="Sự nghiệp cách mạng" 
            text="Người ra đi tìm đường cứu nước năm 1911..." 
            imgs={[
              "https://files.bienphong.com.vn//bbpmedia/media/730/2022/5/19/86480452pm_su-nghiep-cach-mang1.jpg",
              "https://baoquankhu4.com.vn/upload/18269/fck/files/Ch%E1%BB%A7%20t%E1%BB%8Bch%20H%E1%BB%93%20Ch%C3%AD%20Minh%20v%C3%A0%20c%C3%A1c%20%C4%91%E1%BB%93ng%20ch%C3%AD%20l%C3%A3nh%20%C4%91%E1%BA%A1o%20trong%20m%E1%BB%99t%20phi%C3%AAn%20h%E1%BB%8Dp%20t%E1%BA%A1i%20chi%E1%BA%BFn%20khu%20Vi%E1%BB%87t%20B%E1%BA%AFc,%20chu%E1%BA%A9n%20b%E1%BB%8B%20cho%20chi%E1%BA%BFn%20d%E1%BB%8Bch%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdlR-xaO7Dfa_EOoYT8rG2W0CVhCo8zIksw&s",
              "https://bcp.cdnchinhphu.vn/334894974524682240/2022/8/29/e4-16617410965231509364760.jpg"
            ]} 
          />

          <Section 
            title="Sự nghiệp viết lách" 
            text="Bác là nhà văn hóa lớn..." 
            imgs={[
              "https://lh6.googleusercontent.com/proxy/hg5sDalLtGEB78veMmtW9X29TbSnYdCKWEcXuCeKIsOkgcssmWoIvyWjyajPL8Sv0rYfcQ0y8i4WFpsEfLCyWUDDBF7Os92cmMgkxjfNg8SqpxXm7vxw70caCwaGi3UxtYyMc0LYaGfCtx87",
              "https://file3.qdnd.vn/data/images/0/2024/08/26/upload_2062/a-bac.jpg",
              "https://imgnvsk.vnanet.vn/MediaUpload/Org/2023/09/08/z4646325144569-bfc4bd69760244106c10fed14b71629c30-9-49-21-1-8-15-36-22.jpg",
              "https://cand.com.vn/Files/Image/vietphung/2019/08/31/thumb_660_389e28ff-c685-4d08-a422-696769957484.jpg"
            ]} 
          />
        </div>
      )}
      

      {/* ================= QUÊ NỘI ================= */}
      {tab === "que-noi" && (
        <Section
          title="Quê nội - Làng Sen"
          text="Làng Sen là nơi Bác lớn lên..."
          imgs={[17, 18, 19, 20]}
        />
      )}

      {/* ================= QUÊ NGOẠI ================= */}
      {tab === "que-ngoai" && (
        <Section
          title="Quê ngoại - Hoàng Trù"
          text="Hoàng Trù là nơi Bác sinh ra..."
          imgs={[21, 22, 23, 24]}
        />
      )}

      {/* ================= KÝ ỨC ================= */}
      {tab === "ky-uc" && (
        <div className="space-y-10">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Ký ức về Bác Hồ
            </h2>
            <p className="italic text-gray-600 max-w-2xl mx-auto">
              "Bác Hồ luôn sống trong trái tim mỗi người dân Việt Nam..."
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[1, 2, 3, 4].map(i => (
                <img
                  key={i}
                  src={`https://picsum.photos/300/200?random=${i}`}
                  className="rounded-xl"
                  alt="Ký ức"
                />
              ))}
            </div>
          </div>

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
                    alt="Memory"
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

// 2. Component chính bao bọc bởi Suspense
export default function GalleryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-green-700">Đang tải dữ liệu bảo tàng...</p>
      </div>
    }>
      <GalleryContent />
    </Suspense>
  );
}

/* COMPONENT DÙNG CHUNG */
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
            alt="Gallery"
          />
        ))}
      </div>
    </div>
  );
}