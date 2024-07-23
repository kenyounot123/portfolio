import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ken Lu | Software Engineer, Developer, Designer",
  icons: "/favicon/favicon.ico",
  description: "Ken Lu is a software engineer specializing in React, Rails, HTML, and CSS. Explore his portfolio, projects, and design work.",
  keywords: "Ken Lu, software engineer, React developer, Rails developer, HTML, CSS, web design, portfolio",
  openGraph: {
    title: "Ken Lu | Software Engineer, Developer, Designer",
    description: "Ken Lu is a software engineer specializing in React, Rails, HTML, and CSS. Explore his portfolio, projects, and design work.",
    url: "https://ken-lu.dev",  // Replace with your actual website URL
    type: "website",
    images: "/luffy.png",  // Replace with the actual URL of the image you want to use
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light" enableSystem={false} >{children}</ThemeProvider>
      </body>
    </html>
  );
}
