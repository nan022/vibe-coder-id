import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "Kritme - Platform Belajar Membuat Produk IT Dengan Coding & AI!",
    template: "%s | Kritme",
  },
  description: "Kritme adalah Platform Belajar Membuat Produk IT Dengan Coding & AI.",
  keywords: [
    "AI",
    "Coding",
    "website",
    "programmer",
    "web developer",
    "AI Engineer",
    "kritme",
    "platform belajar"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Favicon - WAJIB untuk override Next.js default */}
        <link rel="icon" href="/images/logos/kritme.svg" sizes="any" />
        
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased bg-white dark:bg-gray-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}