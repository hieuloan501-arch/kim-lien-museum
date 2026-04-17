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
            text="Chủ tịch Hồ Chí Minh (1890–1969), tên khai sinh Nguyễn Sinh Cung, là vị lãnh tụ vĩ đại của dân tộc Việt Nam. Sinh tại Nghệ An trong gia đình nhà nho yêu nước, Người ra đi tìm đường cứu nước năm 1911, tìm thấy con đường giải phóng dân tộc theo chủ nghĩa Mác-Lênin, thành lập Đảng Cộng sản Việt Nam, lãnh đạo cách mạng tháng Tám thành công và trở thành Chủ tịch nước đầu tiên.Chủ tịch Hồ Chí Minh sinh năm 1890 tại Nghệ An..." 
            imgs={[
              "https://inkythuatso.com/uploads/thumbnails/800/2023/03/nhung-hinh-anh-ve-bac-ho-dep-nhat-2-04-11-49-18.jpg?w=1130",
              "https://cdn.nbtv.vn/upload/news/5_2020/1_08593319052020.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj3ZRe-FBTsQrJUVJ-xnMoS8LweDWpc9MMXg&s",
              "https://inkythuatso.com/uploads/thumbnails/800/2023/03/hinh-anh-bac-ho-cuoi-1-04-11-51-12.jpg?w=1130"
            ]} 
          />

          <Section 
            title="Gia đình Bác" 
            text="Hồ Chí Minh sinh ra trong một gia đình nhà nho yêu nước tại làng Sen (Kim Liên), Nghệ An. Cha là cụ phó bảng Nguyễn Sinh Sắc, mẹ là bà Hoàng Thị Loan. Gia đình có 4 người con, bao gồm: chị gái Nguyễn Thị Thanh, anh trai Nguyễn Sinh Khiêm, Hồ Chí Minh (tên khai sinh Nguyễn Sinh Cung) và em trai Nguyễn Sinh Nhuận." 
            imgs={[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwUYIJTxvVb-lChqBJd2CuKmG4qJnozEARA&s",
              "https://phuongnam.vanhoavaphattrien.vn/uploads/images/2021/12/15/images1768118-8-1639552864.jpg"
            ]} 
          />

          <Section 
            title="Sự nghiệp cách mạng" 
            text="Chủ tịch Hồ Chí Minh (1890–1969) là lãnh tụ vĩ đại của cách mạng Việt Nam, người tìm ra con đường giải phóng dân tộc theo chủ nghĩa Mác-Lênin. Người ra đi tìm đường cứu nước năm 1911, thành lập Đảng Cộng sản Việt Nam (1930), lãnh đạo Cách mạng Tháng Tám thành công (1945), và sáng lập nước Việt Nam Dân chủ Cộng hòa." 
            imgs={[
              "https://files.bienphong.com.vn//bbpmedia/media/730/2022/5/19/86480452pm_su-nghiep-cach-mang1.jpg",
              "https://baoquankhu4.com.vn/upload/18269/fck/files/Ch%E1%BB%A7%20t%E1%BB%8Bch%20H%E1%BB%93%20Ch%C3%AD%20Minh%20v%C3%A0%20c%C3%A1c%20%C4%91%E1%BB%93ng%20ch%C3%AD%20l%C3%A3nh%20%C4%91%E1%BA%A1o%20trong%20m%E1%BB%99t%20phi%C3%AAn%20h%E1%BB%8Dp%20t%E1%BA%A1i%20chi%E1%BA%BFn%20khu%20Vi%E1%BB%87t%20B%E1%BA%AFc,%20chu%E1%BA%A9n%20b%E1%BB%8B%20cho%20chi%E1%BA%BFn%20d%E1%BB%8Bch%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdlR-xaO7Dfa_EOoYT8rG2W0CVhCo8zIksw&s",
              "https://bcp.cdnchinhphu.vn/334894974524682240/2022/8/29/e4-16617410965231509364760.jpg"
            ]} 
          />

          <Section 
            title="Sự nghiệp viết lách" 
            text="Sự nghiệp viết lách của Chủ tịch Hồ Chí Minh là một bộ phận không thể tách rời sự nghiệp cách mạng vĩ đại của Người. Văn chương đối với Hồ Chí Minh trước hết là một vũ khí sắc bén chiến đấu vì độc lập, tự do của dân tộc và chủ nghĩa xã hội." 
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
          text={`Làng Sen (tên chữ là Kim Liên) là quê nội của Chủ tịch Hồ Chí Minh. Nếu làng Hoàng Trù là nơi Người sinh ra, thì làng Sen là nơi nuôi dưỡng những năm tháng thiếu niên (từ năm 11 đến 16 tuổi) và chứng kiến sự trưởng thành về tinh thần yêu nước của Bác.

📍 Thông tin vị trí & quy mô

-Địa chỉ: Xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An.

-Khoảng cách: Cách làng Hoàng Trù khoảng 2km và cách thành phố Vinh khoảng 15km.

-Tên gọi: Sở dĩ có tên là làng Sen vì quanh làng có rất nhiều hồ sen, tỏa hương thơm ngát vào mùa hè.

🏠 Các hạng mục di tích chính

-Di tích làng Sen mang vẻ đẹp thanh bình với những hàng rào râm bụt và bóng tre xanh:

+)Ngôi nhà gỗ 5 gian: Đây là ngôi nhà do nhân dân làng Sen dựng tặng cụ Nguyễn Sinh Sắc (thân sinh Bác Hồ) khi cụ đỗ Phó bảng năm 1901.

+)Cổng nhà và sân vườn: Ngôi nhà có cổng bằng tre, bao quanh là hàng rào râm bụt cắt tỉa gọn gàng. Trong sân có những chum vôi, gáo dừa và các đồ dùng sinh hoạt giản dị.

+)Các kỷ vật: Phản gỗ, chõ gỗ, mâm gỗ sơn đen... gắn liền với đời sống của cụ Phó bảng và các con (ông Khiêm, bà Thanh và Bác Hồ).

+)Ao Sen và Giếng Cốc: Những địa danh gắn liền với kỷ niệm thời thơ ấu, nơi Bác thường ra vui chơi hoặc giúp gia đình gánh nước.

✨ Ý nghĩa lịch sử

-Nơi hội tụ lòng dân: Ngôi nhà 5 gian là món quà của dân làng thể hiện sự kính trọng đối với vị quan thanh liêm, học rộng như cụ Phó bảng.

-Nơi nhen nhóm ý chí cách mạng: Tại đây, Bác Hồ đã chứng kiến nhiều buổi đàm luận việc nước giữa cha mình và các chí sĩ yêu nước như Phan Bội Châu, Vương Thúc Quý.

-Biểu tượng văn hóa: Làng Sen là biểu tượng cho nếp sống thanh bạch, hiếu học và lòng yêu nước của người dân xứ Nghệ.`} 
          imgs={[
            "https://anhsangvacuocsong.vn/wp-content/uploads/2022/02/Lang-Sen-que-noi-cua-Bac.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdznHYt7ltB8qQP6ySWkjGL_qpndTb9n_mJQ&s",
            "https://lh4.googleusercontent.com/proxy/726ZS2M4dMiwVnGidEoyQWywpRMR7Njznkgmc6yiVQ4W2jcjbrgXnrKesuL_6UUjT-2Fl-o6cpHFYLEH42kANqfUk-N9N25N32zjFdOd76WaxwA4k-Ykpw",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbuBG3yq5adFuDthtXhTHXIy3-6jpywArAQ&s"
          ]}
        />
      )}

      {/* ================= QUÊ NGOẠI ================= */}
      {tab === "que-ngoai" && (
        <Section
          title="Quê ngoại - Hoàng Trù"
          text={`Làng Hoàng Trù (hay còn gọi là làng Chùa) là quê ngoại và cũng chính là nơi sinh của Chủ tịch Hồ Chí Minh. Đây là một trong những di tích quan trọng nhất thuộc Khu di tích Kim Liên, nơi lưu giữ những ký ức đầu đời của Bác từ khi chào đời (19/5/1890) đến năm 5 tuổi. 

📍 Thông tin vị trí & quy mô

-Địa chỉ: Xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An.

-Khoảng cách: Cách thành phố Vinh khoảng 15km về phía Tây và cách làng Sen (quê nội) khoảng 2km.

-Diện tích: Cụm di tích nằm gọn trong khu vườn rộng khoảng 3.500m² (7 sào Trung Bộ). 

🏠 Các hạng mục di tích chính

-Cụm di tích Hoàng Trù mang đậm nét kiến trúc nông thôn Việt Nam cuối thế kỷ XIX với mái tranh, vách đất đơn sơ: 

+)Nhà thờ chi nhánh họ Hoàng Xuân: Nơi thờ tự tổ tiên bên ngoại của Bác.

+)Ngôi nhà của cụ Hoàng Đường: Nhà của ông bà ngoại Bác, nơi cha mẹ Bác (cụ Nguyễn Sinh Sắc và cụ Hoàng Thị Loan) đã sống sau khi kết hôn.

+)Ngôi nhà tranh 3 gian: Do cụ Hoàng Đường dựng cho con rể. Đây chính là nơi Bác Hồ cất tiếng khóc chào đời.

+)Các kỷ vật: Trong nhà vẫn lưu giữ bộ phản gỗ, chiếc án thư nơi cụ Sắc học bài, chiếc võng đưa Bác ngủ và khung cửi dệt vải của bà Hoàng Thị Loan. 

✨ Ý nghĩa lịch sử
-Nơi nuôi dưỡng tâm hồn: Hoàng Trù không chỉ là nơi sinh mà còn là môi trường giáo dục đầu tiên, nơi Bác nhận được sự dạy dỗ từ ông ngoại là thầy học nổi tiếng và người mẹ đảm đang.

-Điểm đến du lịch: Hàng năm, nơi đây đón hàng triệu lượt khách đến thăm để tìm hiểu về thân thế, sự nghiệp và phong cách giản dị của Người.`}
          imgs={[
            "https://bna.1cdn.vn/2024/06/12/bna_que-ngoai-bac-ho-1.jpg",
            "https://cdn.media.dulich24.com.vn/diemden/lang-hoang-tru-que-ngoai-bac-ho-6424/lang-hoang-tru-que-ngoai-bac-ho-3.jpg",
            "https://phuongnam.vanhoavaphattrien.vn/uploads/images/2024/05/07/z5418663115768-5f33661d267d66ad82da3de4690743ae-1715100319.jpg",
            "https://bna.1cdn.vn/2024/06/01/bna_ben-trong-ngoi-nha-moc-mac-don-so-cua-cu-hoang-xuan-duong..jpg"
          ]}
        />
      )}

      {/* ================= KÝ ỨC ================= */}
      {tab === "ky-uc" && (
        <div className="space-y-10">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Ký ức về Bác Hồ và Kim Liên 
            </h2>
            <p className="italic text-gray-600 max-w-2xl mx-auto">
              "Bác sống trong lòng dân – Kim Liên rạng rỡ dấu chân người về. Cùng lan tỏa hạnh phúc và niềm tự hào khi được chạm vào ký ức thiêng liêng tại quê Bác!"
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                "https://images.baodantoc.vn/uploads/2024/Thang-4/Ngay-27/My-Thanh/BH%201.jpg",
                "https://images.hcmcpv.org.vn/res/news/2023/01/22-01-2023-bac-ho-voi-tet-co-truyen-dan-toc-17F694C8.jpg",
                "https://media-cdn-v2.laodong.vn/storage/newsportal/2026/2/18/1657367/A91_150Kb.jpg",
                "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/5/19/1341850/KIM-LIEN.jpg?w=800&h=496&crop=auto&scale=both"
              ].map((url, idx) => (
                <img
                  key={idx}
                  src={url}
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
      <p className="mb-4 text-gray-700 whitespace-pre-line">
        {text}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* SỬA TẠI ĐÂY: Dùng trực tiếp biến 'img' thay vì link picsum */}
        {imgs.map((img: any, index: number) => (
          <img
            key={index}
            src={typeof img === 'string' ? img : `https://picsum.photos/300/200?random=${img}`}
            className="rounded-xl hover:scale-105 transition object-cover h-48 w-full"
            alt={title}
          />
        ))}
      </div>
    </div>
  );
}