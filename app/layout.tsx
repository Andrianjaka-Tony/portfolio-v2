import type { Metadata } from "next";
import "./globals.css";
import ReactLenis from "lenis/react";

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
    <html lang="en">
      <body className="bg-background text-foreground">
        <div className="z-10 py-8 text-xl fixed w-screen flex justify-center gap-8">
          <p>Work</p>
          <p>About</p>
        </div>
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
