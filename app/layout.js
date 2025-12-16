import LenisProvider from "./components/LenisProvider";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of Muhammad Tayyab",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${raleway.variable} antialiased min-h-screen`}
      >
        <LenisProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
