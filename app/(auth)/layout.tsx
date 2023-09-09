import "../globals.css";
import type { Metadata } from "next";
import Providers from "../providers";

export const metadata: Metadata = {
  title: "Shopio",
  description: "An e-commerce online store with various categories of products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen bg-lightGrey font-Poppins">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
