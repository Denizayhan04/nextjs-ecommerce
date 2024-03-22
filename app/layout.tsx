import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { StoreProvider } from "./store/StoreProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E ticaret moruk",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
    <html className=" *:box-border" lang="en">
      <body className={inter.className}>
      <div className='flex flex-col min-h-screen'>
      <Navbar />
        <main className='flex flex-col  flex-grow relative' >{children}</main>
        <Footer />
      </div>
      </body>
    </html>
    </ StoreProvider>
  );
}
