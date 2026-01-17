import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../css/background.css";

const inter = Inter({
  subsets: ["latin"], // bisa ditambah 'latin-ext', 'vietnamese', dll.
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Febrian's Portfolio",
  description: "Febrian's Portfolio Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
