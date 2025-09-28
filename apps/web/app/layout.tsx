import { Providers } from "@/components/providers";
import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";

const fontSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

// const fontMono = Geist_Mono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
