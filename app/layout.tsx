import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Anay - 13-Year-Old Full-Stack Developer | Dubai",
  description: "Professional web development services by Anay, a 13-year-old Dubai-based developer specializing in modern websites, AI chatbots, and full-stack applications. Fast delivery, affordable pricing.",
  keywords: ["web developer Dubai", "teen developer", "AI chatbot developer", "Next.js developer", "full-stack developer"],
  authors: [{ name: "Anay" }],
  openGraph: {
    title: "Anay - 13-Year-Old Full-Stack Developer",
    description: "Websites so good, people forget I'm 13. Modern, fast, AI-powered web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
