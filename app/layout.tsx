import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Favicon from "/public/images/Metadata/favicon.ico";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://maro-dev.jp"),
  title: "maro（Webアプリ・Webデザイン）",
  description:
    "Webアプリ・Webデザインを担当するフロント・バックエンドエンジニアのポートフォリオサイトです。",
  icons: [{ rel: "icon", url: Favicon.src }],
  openGraph: {
    title: "maro（Webアプリ・Webデザイン）",
    description:
      "Webアプリ・Webデザインを担当するフロント・バックエンドエンジニアのポートフォリオサイトです。",
    url: "https://maro-dev.jp",
    siteName: "maro",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/ogp.png",
        width: 1200,
        height: 630,
        alt: "maro（Webアプリ・Webデザイン）",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/ogp.png"],
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="flex flex-col">
          <div className="flex-grow">{children}</div>
          <div className="sticky bottom-0">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
