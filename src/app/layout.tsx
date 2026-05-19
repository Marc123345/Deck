import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EID Growth Opportunity",
  description:
    "From brochure site to a site that wins business — strategy deck prepared for EID Ltd.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-black text-white antialiased">
        <div className="eid-deck-root fixed inset-0 z-[100] bg-black text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
