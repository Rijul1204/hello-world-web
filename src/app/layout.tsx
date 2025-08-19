import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello World Web App",
  description: "Web component for Hello World Android app integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div className="min-h-screen bg-purple-600 flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}