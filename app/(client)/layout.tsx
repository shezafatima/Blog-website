import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Provider } from "../utils/Provider"
import Footer from "../components/Footer";

const firaCode = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {

  title: {
    default: "TechNowledge",
    template: '%s | TechNowledge '
  },
  description: " A blog about technology.",
 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500`}
      >
        <Provider>
          <Navbar />
          <main className="h-full mx-auto max-w-7xl px-6 mb-10 ">{children}</main>
        <Footer />
        </Provider>

      </body>
    </html>
  );
}
