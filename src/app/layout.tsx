import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boarding Pass-Juan Carlos Muñoz Pabon",
  description: "My Boarding Pass Card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
