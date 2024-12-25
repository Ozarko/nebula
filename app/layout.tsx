import "server-only";

import {
  MAIN_METADATA as metadata,
  MAIN_VIEWPORT as viewport,
} from "@/libs/constants/metadata/root-layout";
import openSans from "@/libs/fonts/open-sans";
import { LayoutProps } from "@/libs/types/app";

import "./globals.css";

export { metadata, viewport };

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
