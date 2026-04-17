"use client";

const data = [
  {
    title: "Quê nội",
    vi: "Đây là nơi sinh sống của gia đình bên nội, gắn liền với tuổi thơ.",
    en: "This is the paternal hometown, connected to childhood memories.",
    img: "https://cdn3.ivivu.com/2024/09/lang-sen-que-bac-ivivu-1.png",
  },
  {
    title: "Quê ngoại",
    vi: "Quê ngoại mang lại sự ấm áp và nhiều kỷ niệm đáng nhớ.",
    en: "The maternal hometown brings warmth and memorable moments.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbaL96Yx3BK8j4mhehcfjz_NZT_7D93q61Q&s",
  },
  {
    title: "Mộ bà Loan",
    vi: "Nơi tưởng niệm, thể hiện lòng biết ơn.",
    en: "A memorial place showing gratitude and respect.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrbszT8TwMB7v0_jyCGeY9F6KCUw4VuFh7g&s",
  },
  {
    title: "Ý nghĩa gia đình",
    vi: "Gia đình là nơi kết nối và lưu giữ giá trị truyền thống.",
    en: "Family connects generations and preserves values.",
    img: "https://images.unsplash.com/photo-1511895426328-dc8714191300",
  },
];

export default function InfoSection() {
  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-8">
        📖 Thông tin gia đình
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition"
          >
            <img src={item.img} className="w-full h-48 object-cover" />

            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">{item.title}</h2>
              <p className="text-sm italic text-gray-600 mb-2">
                {item.vi}
              </p>
              <p className="text-sm">{item.en}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}