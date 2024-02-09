import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import ThemeRegistry from "@/utils/muiTheme/ThemeRegistry";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ fontFamily: "inherit" }}>
      <ThemeRegistry>
        <body
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
          className={poppins.className}
        >
          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
}
