import { Poppins, Jost, Oswald, Khand, Magra } from "next/font/google";

import localFont from "next/font/local";
import "./globals.css";
// import Navbar from "@/components/shared/Navbar";
/* katanainu navbar 👆 */
/* kainu navbar 👇 */
import Navbar from "@/components/shared/navbar/Navbar";
import LoadingProvider from "./_loadingProvider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/shared/footer/Footer";
// katanainu footer 👇
// import Footer from "@/components/shared/Footer";
// kainu footer 👇

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jost",
});

const khand = Khand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-khand",
});

const magra = Magra({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-magra",
});

const grind = localFont({
  src: "../../public/fonts/Grind_Demolished.ttf",
  variable: "--font-grind",
});

export const metadata = {
  title: "Beta Katanainu",
  description: "Multiplayer on-chain action game - Katana Inu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${grind.variable} ${jost.variable} ${oswald.variable} ${khand.variable} ${magra.variable}`}
      >
        <LoadingProvider>
          <Toaster />
          <Navbar />
          {children}
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
