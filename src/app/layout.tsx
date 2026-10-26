import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FROM HERE — Your Next Begins Here",
  description:
    "A conference for what comes next. Find your direction, build your capabilities, and connect with the people and opportunities that move you forward. 5th DEC · Uli, Anambra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
