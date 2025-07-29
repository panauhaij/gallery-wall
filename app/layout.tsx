import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "画廊-钟&桦",
  description: "林的照片墙",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
