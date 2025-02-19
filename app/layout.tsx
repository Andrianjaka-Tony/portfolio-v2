import type { Metadata } from "next";
import "./globals.css";
import ReactLenis from "lenis/react";
import { ViewTransitions } from "next-view-transitions";

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
          <ReactLenis root>{children}</ReactLenis>
        </body>
      </html>
    </ViewTransitions>
  );
}
