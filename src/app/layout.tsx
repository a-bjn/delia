import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import AOSInit from "./components/aos-init";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Bejan Love SRL",
  description: "Oferim servicii de iubire pentru Delia <3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} antialiased`}>
        <AOSInit />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
