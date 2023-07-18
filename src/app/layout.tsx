import "./globals.css";
import type { Metadata } from "next";
import { Rokkitt } from "next/font/google";

const rokkitt = Rokkitt({ subsets: ["latin"], weight: ["200", "400", "700"] });

export const metadata: Metadata = {
  title: "XeloX1UP",
  description: "Portafolio de XeloX1UP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`p-5 md:p-10 h-full min-h-screen min-w-min bg-gradient-to-bl from-black to-slate-900 ${rokkitt.className}`}
      >
        {children}
      </body>
    </html>
  );
}
