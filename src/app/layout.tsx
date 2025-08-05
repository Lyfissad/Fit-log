import type { Metadata } from "next";
import "./globals.css";
import ExerciseProvider from "@/context/exerciseProvider";
import NavFooter from "./components/NavFooter";



export const metadata: Metadata = {
  title: "Fit Log - Train. Track. Transform.",
  description: "Fitness App",
  icons:{
    icon: "./browser_logo.PNG"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-grayBlack text-text-pri h-screen overflow-hidden relative`}>
        <ExerciseProvider>
          <div className="absolute inset-0 overflow-y-auto pb-[4.5rem]">
           {children}
        </div>
        <NavFooter />
        </ExerciseProvider>
      </body>
    </html>
  );
}


