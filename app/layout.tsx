import "server-only";

import { Geist, Geist_Mono } from "next/font/google";

import {
  MAIN_METADATA as metadata,
  MAIN_VIEWPORT as viewport,
} from "@/libs/constants/metadata/root-layout";
import { LayoutProps } from "@/libs/types/app";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { metadata, viewport };

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
