import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Vimerge Studio - A design studio for creative christian organizations.",
  description: "A design studio for creative christian organizations.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
          <div className="container max-w-8xl w-full">
            <Header />
          </div>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
