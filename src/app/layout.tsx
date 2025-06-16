import type { Metadata } from "next";
import "./globals.css";
import NavFooter from "./components/NavFooter";


export const metadata: Metadata = {
  title: "Fit Log - Train. Track. Transform.",
  description: "Fitness App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <NavFooter />
      </body>
    </html>
  );
}
