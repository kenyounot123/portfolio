import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ken Lu",
  icons: "/favicon/favicon.ico",
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
