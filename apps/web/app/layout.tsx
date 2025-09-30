import { Providers } from "@/components/providers";
import { StructuredData } from "@/components/structured-data";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { SITE_CONFIG } from "@/lib";

import "@workspace/ui/globals.css";

const fontSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.author.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author.name }],
  creator: SITE_CONFIG.author.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: `${SITE_CONFIG.author.name} Portfolio`,
    url: SITE_CONFIG.url,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <StructuredData />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
