import "./globals.css";
import type { Metadata } from "next";

import NavBar from "@/components/layout/navbar/NavBar";
import Footer from "@/components/layout/footer/Footer";

import ThemeRegistry from "@/utils/muiTheme/ThemeRegistry";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ fontFamily: "inherit" }}>
      <ThemeRegistry>
        <body
          className={`${inter.className}`}
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <NavBar />
          {children}
          <Footer />
        </body>
      </ThemeRegistry>
    </html>
  );
}