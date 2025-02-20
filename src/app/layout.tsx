import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Oxanium } from "next/font/google";

export const metadata: Metadata = {
  title: "DevStage",
};

const montserrat = Montserrat({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const oxanium = Oxanium({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased">{children}</body>
    </html>
  );
}
