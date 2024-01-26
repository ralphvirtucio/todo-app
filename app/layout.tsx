import type { Metadata } from "next";
import {Josefin_Sans} from 'next/font/google'
import "./globals.css";
import image from '@/public/images/favicon-32x32.png'
import { Header } from "@/components/Header";

const josefinSans = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ['latin'],
  display: 'swap'
  
})

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo App designed from Frontend Mentor",
  icons: {
    icon: {
      url: '@/public/images/favicon-32x32.png', 
      sizes: '32x32',
      type: 'image/png',
      rel: 'icon'
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <Header />
        <main>
          {children}
        </main>
        </body>
    </html>
  );
}
