"use client";
import React, { useState, useEffect } from "react";

/* ================= QUIZ ================= */
const quizData = [
  {
    question: "Bác Hồ sinh năm bao nhiêu?",
    options: ["1889", "1890", "1891", "1900"],
    answer: 1,
    hint: "Năm cuối thế kỷ 19"
  },
  {
    question: "Tên khai sinh của Bác Hồ là gì?",
    options: ["Nguyễn Sinh Cung", "Nguyễn Tất Thành", "Nguyễn Ái Quốc", "Nguyễn Sinh Sắc"],
    answer: 0,
    hint: "Tên lúc nhỏ của Bác"
  },
  {
    question: "Quê nội của Bác là ở đâu?",
    options: ["Hoàng Trù", "Làng Sen", "Huế", "Hà Nội"],
    answer: 1,
    hint: "Nơi có hoa sen nổi tiếng"
  },
  {
    question: "Quê ngoại của Bác thuộc địa danh nào?",
    options: ["Làng Sen", "Hoàng Trù", "Vinh", "Nam Định"],
    answer: 1,
    hint: "Quê mẹ của Bác"
  },
  {
    question: "Bác Hồ ra đi tìm đường cứu nước vào năm nào?",
    options: ["1905", "1911", "1920", "1930"],
    answer: 1,
    hint: "Đầu thế kỷ 20"
  },
  {
    question: "Bác Hồ đọc Tuyên ngôn Độc lập vào năm nào?",
    options: ["1940", "1945", "1954", "1969"],
    answer: 1,
    hint: "Sau Cách mạng tháng Tám"
  },
  {
    question: "Nghệ An thuộc vùng nào của Việt Nam?",
    options: ["Bắc", "Trung", "Nam", "Tây Nguyên"],
    answer: 1,
    hint: "Miền Trung"
  },
  {
    question: "Mộ bà Hoàng Thị Loan nằm ở đâu?",
    options: ["Núi Đại Huệ", "Làng Sen", "Hà Nội", "Huế"],
    answer: 0,
    hint: "Một ngọn núi ở Nam Đàn"
  },
  {
    question: "Tên cha của Bác Hồ là gì?",
    options: ["Nguyễn Sinh Sắc", "Nguyễn Du", "Nguyễn Trãi", "Nguyễn Huệ"],
    answer: 0,
    hint: "Một nhà nho yêu nước"
  },
  {
    question: "Tên gọi 'Nguyễn Ái Quốc' gắn với điều gì?",
    options: ["Tên khai sinh", "Bút danh", "Tên lúc nhỏ", "Tên gia đình"],
    answer: 1,
    hint: "Tên dùng khi hoạt động cách mạng"
  }
];

function Quiz({ onBack }: any) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [ranking, setRanking] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("ranking");
    if (saved) setRanking(JSON.parse(saved));
  }, []);

  const handleAnswer = (i: number) => {
    if (selected !== null) return;

    setSelected(i);
    if (i === quizData[current].answer) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      setSelected(null);
      if (current + 1 < quizData.length) setCurrent(current + 1);
      else setDone(true);
    }, 800);
  };

  const saveScore = () => {
    if (!name) return alert("Nhập tên!");
    const updated = [...ranking, { name, score }].sort((a, b) => b.score - a.score);
    setRanking(updated);
    localStorage.setItem("ranking", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 p-6">
      <button onClick={onBack} className="mb-6 text-green-800 font-bold">← Quay lại</button>

      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        {!done ? (
          <>
            <h2 className="text-xl font-bold mb-6 text-center text-green-700">
              🎮 Câu {current + 1}
            </h2>

            <p className="text-center mb-2 font-semibold">
              {quizData[current].question}
            </p>

            <p className="text-center text-sm text-gray-500 italic mb-6">
              💡 Gợi ý: {quizData[current].hint}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {quizData[current].options.map((opt, i) => {
                let style = "bg-green-100 hover:bg-green-300";

                if (selected !== null) {
                  if (i === quizData[current].answer) style = "bg-green-400 text-white";
                  else if (i === selected) style = "bg-red-400 text-white";
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className={`${style} p-4 rounded-2xl font-semibold shadow hover:scale-105 transition`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              🎉 {score}/{quizData.length} điểm
            </h2>

            <input
              placeholder="Nhập tên..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-3 rounded-xl mb-4 w-full"
            />

            <button
              onClick={saveScore}
              className="bg-green-700 text-white px-6 py-3 rounded-xl shadow hover:scale-105"
            >
              Lưu điểm
            </button>

            <button
              onClick={() => {
                setCurrent(0);
                setScore(0);
                setDone(false);
                setName("");
              }}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-xl"
            >
              🔄 Chơi lại
            </button>

            <div className="mt-6 text-left">
              <h3 className="font-bold mb-2">🏆 Bảng xếp hạng</h3>
              {ranking.map((r, i) => (
                <div key={i} className="flex justify-between border-b py-2">
                  <span>{i + 1}. {r.name}</span>
                  <span>{r.score}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= MAIN ================= */
export default function Page() {
  const [mode, setMode] = useState("home");
  const [memories, setMemories] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<any>(null);
  const [video, setVideo] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("memories");
    if (saved) setMemories(JSON.parse(saved));
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const updated = [
      { name, content, image, video },
      ...memories
    ];

    setMemories(updated);
    localStorage.setItem("memories", JSON.stringify(updated));

    setName("");
    setContent("");
    setImage(null);
    setVideo(null);
  };

  /* HOME */
  if (mode === "home") {
    return (
      <div className="h-screen bg-[url('https://media-cdn-v2.laodong.vn/storage/newsportal/2025/5/16/1507718/Que_Noi_Compressed.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/60 p-10 rounded-3xl text-center text-white shadow-2xl">
          <h1 className="text-4xl font-bold mb-8">Ký ức cộng đồng</h1>

          <div className="flex gap-6 justify-center">
            <button
              onClick={() => setMode("form")}
              className="bg-green-600 px-6 py-3 rounded-xl shadow hover:scale-110 transition"
            >
              📩 Đóng góp ngay
            </button>

            <button
              onClick={() => setMode("quiz")}
              className="bg-yellow-500 px-6 py-3 rounded-xl shadow hover:scale-110 transition"
            >
              🎮 Chơi game
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* FORM */
  if (mode === "form") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 p-6">
        <button onClick={() => setMode("home")} className="mb-6 text-green-700 font-semibold">← Quay lại</button>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-2xl">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            📩 Gửi ký ức của bạn
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              placeholder="Tên của bạn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-xl border"
            />

            <textarea
              placeholder="Chia sẻ cảm xúc..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 rounded-xl border"
            />

            {/* IMAGE */}
            <div className="border-2 border-dashed border-green-400 p-4 rounded-xl text-center">
              <p className="font-semibold text-green-700 mb-2">📷 Thêm ảnh của bạn</p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onloadend = () => setImage(reader.result);
                  reader.readAsDataURL(file);
                }}
                className="mx-auto"
              />
              {image && (
                <img src={image} className="mt-3 rounded-xl max-h-60 mx-auto shadow" />
              )}
            </div>

            {/* VIDEO */}
            <div className="border-2 border-dashed border-yellow-400 p-4 rounded-xl text-center">
              <p className="font-semibold text-yellow-600 mb-2">🎥 Thêm video của bạn</p>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onloadend = () => setVideo(reader.result);
                  reader.readAsDataURL(file);
                }}
                className="mx-auto"
              />
              {video && (
                <video src={video} controls className="mt-3 rounded-xl max-h-60 mx-auto shadow" />
              )}
            </div>

            <button className="w-full bg-green-700 text-white py-3 rounded-xl">
              Gửi ngay
            </button>
          </form>
        </div>

        {/* DISPLAY */}
        <div className="max-w-2xl mx-auto mt-8 space-y-4">
          {memories.map((m, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl shadow">
              <b>{m.name}</b>
              <p className="italic">"{m.content}"</p>
              {m.image && <img src={m.image} className="mt-2 rounded-xl" />}
              {m.video && <video src={m.video} controls className="mt-2 rounded-xl" />}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (mode === "quiz") {
    return <Quiz onBack={() => setMode("home")} />;
  }
}
