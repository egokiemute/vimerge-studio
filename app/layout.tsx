import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vimerge Studio - A design studio for creative christian organizations.",
  description: "A design studio for creative christian organizations.",
  icons: {
    icon: "/favicon.ico",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: string;
  metaUrl?: string;
};

export default function RootLayout({
  children,
  metaTitle = "Vimerge Studio - A design studio for creative christian organizations.",
  metaDescription = "A design studio for creative christian organizations.",
  metaImage = "/banner.png",
  metaUrl = "https://vimerge.studio",
}: RootLayoutProps) {
  return (
    <html lang="en">
      <Meta title={metaTitle} description={metaDescription} image={metaImage} url={metaUrl} />
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
