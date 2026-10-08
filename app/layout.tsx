import type { Metadata } from "next";
import Script from "next/script"
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ken-lu.dev"),
  title: "Ken Lu | Software Engineer, Developer, Designer",
  description: "Ken Lu is a software engineer specializing in React, Rails, HTML, and CSS. Explore his portfolio, projects, and design work.",
  keywords: "Ken Lu, software engineer, React developer, Rails developer, HTML, CSS, web design, portfolio",
  openGraph: {
    title: "Ken Lu | Software Engineer, Developer, Designer",
    description: "Ken Lu is a software engineer specializing in React, Rails, HTML, and CSS. Explore his portfolio, projects, and design work.",
    url: "https://ken-lu.dev",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
      {/* <!-- Google tag (gtag.js) --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KB0L9TXEGX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KB0L9TXEGX');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-page antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} >{children}</ThemeProvider>
      </body>
    </html>
  );
}
