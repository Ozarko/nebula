import "server-only";

import { MAIN_METADATA as metadata } from "@constants/metadata/root-layout";
import openSans from "@fonts/open-sans";
import { LayoutProps } from "@typeslib/app";

import "./globals.css";

export { metadata };

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased bg-nebula-gradient`}>
        {children}
      </body>
    </html>
  );
}
