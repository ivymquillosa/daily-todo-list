import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TodoProvider } from "@/context/DataContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Daily Todo List",
  description: "Simple Todo list with basic JavaScript, Tailwind CSS, Next.js, and RESTful API integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full flex min-h-[100vh] justify-center px-3 bg-primary-50 text-default-900`}
      >
        <TodoProvider>
          {children}
        </TodoProvider>
      </body>
    </html>
  );
}
