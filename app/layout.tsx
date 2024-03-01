import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const hankenGrotesk = localFont({
  src: "./fonts/HankenGrotesk-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-hanken-grotesk",
});

export const metadata: Metadata = {
  title: "Result Summary Compoent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.variable} ${hankenGrotesk.className} h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
