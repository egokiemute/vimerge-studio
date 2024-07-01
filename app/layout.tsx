import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vimerge Studio - Home",
  description: "Welcome to Vimerge Studio, a design studio for creative christian organizations.",
  icons: {
    icon: "/favicon.ico",
  },
  // openGraph: {
  //   type: 'website',
  //   locale: 'en_US',
  //   url: 'https://vimerge.studio',
  //   title: 'Vimerge Studio - Home',
  //   description: 'Welcome to Vimerge Studio, a design studio for creative christian organizations.',
  //   images: [
  //     {
  //       url: '/banner.png',
  //       width: 800,
  //       height: 600,
  //       alt: 'Vimerge Studio Banner',
  //     },
  //   ],
  // },
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