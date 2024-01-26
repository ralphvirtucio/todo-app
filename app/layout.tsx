import type { Metadata } from "next";
import {Josefin_Sans} from 'next/font/google'
import "./globals.css";

const josefinSans = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ['latin'],
  display: 'swap'
  
})

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo App designed from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>{children}</body>
    </html>
  );
}
