import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col">
        
        {/* HEADER */}
        <Header />

        {/* NỘI DUNG */}
        <main className="flex-1">
          {children}
        </main>

        {/* FOOTER (có thể thêm sau) */}
        <footer className="bg-green-900 text-white text-center py-4">
          © Kim Liên Museum
        </footer>

      </body>
    </html>
  );
}