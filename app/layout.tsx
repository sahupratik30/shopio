import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import type { Metadata } from "next";

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
      <body className="flex flex-col min-h-screen bg-lightGrey font-Poppins">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
