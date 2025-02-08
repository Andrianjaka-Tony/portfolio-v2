import type { Metadata } from "next";
import "./globals.css";
import ReactLenis from "lenis/react";
import { ViewTransitions } from "next-view-transitions";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Andrianjaka Tony",
  description: "This is Tony's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className="bg-background text-foreground">
          <div className="z-10 py-8 fixed top-0 left-0 w-screen flex justify-center gap-12">
            <Link href="/" scroll={false} className="opacity-40 cursor-pointer">
              Work
            </Link>
            <Link href="/about" scroll={false} className="cursor-pointer">
              About
            </Link>
          </div>
          <ReactLenis root>{children}</ReactLenis>
        </body>
      </html>
    </ViewTransitions>
  );
}
