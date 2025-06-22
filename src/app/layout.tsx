import type { Metadata } from "next";
import "./globals.css";
import NavFooter from "./components/NavFooter";
import ExerciseProvider from "@/context/exerciseProvider";

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
      <body className="min-h-screen">
        <ExerciseProvider>
        {children}
        <NavFooter />
        </ExerciseProvider>
      </body>
    </html>
  );
}
