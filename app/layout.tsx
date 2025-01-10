import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
