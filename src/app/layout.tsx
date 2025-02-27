import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/providers/providers";
import Navbar from "@/shared/Navbar";
import { Poppins } from 'next/font/google';
import Footer from "@/shared/Footer/Footer";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Vajra Foundations",
  description: "Vajra Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#F5FAF1]">
      <body
        className={`${poppins.className} antialiased bg-[#F5FAF1] text-black`}
      >
        <Provider>
          <Navbar/>
          {children}
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
