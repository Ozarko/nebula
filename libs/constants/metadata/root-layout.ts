import { Metadata, Viewport } from "next";

export const MAIN_VIEWPORT: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const MAIN_METADATA: Metadata = {
  title: {
    default: "AskNebula | Best Psychics & Astrologers",
    template: "%s | AskNebula",
  },
  description:
    "Gain clarity and find happiness with insights from professional psychics and astrologers. Your journey to a better future starts today.",
  keywords: [
    "psychics",
    "astrologers",
    "professional readings",
    "find clarity",
    "happiness",
    "future insights",
  ],
  authors: [
    { name: "AskNebula" },
    { name: "AskNebula Team", url: "https://asknebula.com" },
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AskNebula | Best Psychics & Astrologers",
    description:
      "Gain clarity and find happiness with insights from professional psychics and astrologers.",
    url: "https://asknebula.com",
    siteName: "AskNebula",
    images: [
      {
        url: "https://asknebula.com/app/logo.png", // Consider using a higher-resolution image for better visual impact
        width: 1200,
        height: 1200,
        alt: "AskNebula Banner Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AskNebula | Best Psychics & Astrologers",
    description:
      "Your journey to a better future starts today with professional psychics and astrologers.",
    site: "@AskNebula",
    creator: "@AskNebula",
    images: ["https://asknebula.com/app/logo.png"],
  },
};
