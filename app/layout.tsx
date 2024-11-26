import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont(  {
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

export const metadata: Metadata = {
  title: "Djigo.dev 🧑🏾‍💻 - Engineering & Product",
  description: "With over 7 years in the tech industry, I bring a wealth of expertise and a track record of success in developing and managing cutting-edge products. ",
  openGraph: {
    title: "Djigo.dev 🧑🏾‍💻 - Engineering & Product",
    description: "With over 7 years in the tech industry, I bring a wealth of expertise and a track record of success in developing and managing cutting-edge products.",
    url: "https://djigo.dev",
    siteName: "Djigo.dev",
    images: [
      {
        url: "https://djigo.dev/metaimg.png",
        width: 1200,
        height: 628,
        alt: "Djigo.dev Open Graph Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
