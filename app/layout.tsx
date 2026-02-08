import type { Metadata } from "next";
import { Lusitana } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-lusitana",
});

export const metadata: Metadata = {
  title: "Anay Goenka — Student & Developer",
  description: "Hi, I'm Anay — a student and full-stack developer based in Dubai. I build web apps, tools, and platforms with modern tech.",
  keywords: ["Anay Goenka", "student developer", "full-stack developer", "Next.js", "portfolio"],
  authors: [{ name: "Anay Goenka" }],
  openGraph: {
    title: "Anay Goenka — Student & Developer",
    description: "Hi, I'm Anay — a student and full-stack developer based in Dubai. I build web apps, tools, and platforms with modern tech.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lusitana.variable} antialiased`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
