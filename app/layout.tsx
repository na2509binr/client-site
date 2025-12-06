import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./(main)/components/header";
import Footer from "./(main)/components/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../fontawesome";
import HeaderMobile from "./(main)/components/header-mobile";


import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ["latin", "vietnamese"],
  // subsets: ['latin'],   // Chọn subset phù hợp, ví dụ latin hoặc vietnamese
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'], // Chọn weight cần dùng
  display: 'swap',      // Tối ưu hiển thị text
});
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ["latin", "vietnamese"],
  // subsets: ['latin'],   // Chọn subset phù hợp, ví dụ latin hoặc vietnamese
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Chọn weight cần dùng
  display: 'swap',      // Tối ưu hiển thị text
});


import { Inter } from "next/font/google";
import { GlobalDataProvider } from "./providers/GlobalDataProvider";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: "swap",
  variable: "--font-inter",
});



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tên Website – Mô tả ngắn gọn",
    template: "%s | Tên Website"
  },
  description: "Mô tả website tối ưu SEO dài 150–160 ký tự.",
  keywords: ["keyword 1", "keyword 2", "keyword 3"],
  authors: [{ name: "Tên bạn hoặc thương hiệu" }],

  // ✅ SEO quan trọng
  metadataBase: new URL("https://your-domain.com"),
  alternates: {
    canonical: "/",
  },

  // ✅ Open Graph (FB, Zalo)
  openGraph: {
    type: "website",
    siteName: "Tên Website",
    title: "Tên Website – Mô tả ngắn",
    description: "Mô tả website tối ưu.",
    url: "https://your-domain.com",
    images: [
      "/og-image.jpg"
    ]
  },

  // ✅ Twitter SEO
  twitter: {
    card: "summary_large_image",
    title: "Tên Website",
    description: "Mô tả website.",
    images: ["/og-image.jpg"],
  },

  // ✅ Favicons
  icons: {
    icon: "../public/Logo_LOGO MÀU CHUẨN.png",
    apple: "/apple-touch-icon.png"
  },

  // ✅ Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      //   maxVideoPreview: -1,
      //   maxImagePreview: "large",
      //   maxSnippet: -1,
    },
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="">
      {/* <head>
        <link
          rel="preload"
          href="/fonts/Raleway.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        ${raleway.className}

      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${nunito.className}`}
      // className={`${geistSans.variable} ${geistMono.variable} antialiased ${raleway.className}`}
      // className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.className}`}
      >
        <GlobalDataProvider>
          {children}
        </GlobalDataProvider>
      </body>
    </html>
  );
}
