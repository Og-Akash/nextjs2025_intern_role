import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Content Manager",
  description: "Manage Your Content to Acheive big.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${urbanist.className} antialiased`}>
        <main className="flex w-screen overflow-y-hidden">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
