import type { Metadata } from "next";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import ExerciseProvider from "@/context/exerciseProvider";
import NavFooter from "./components/NavFooter";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "@/context/userContext";


export const metadata: Metadata = {
  title: "Fit Log - Train. Track. Transform.",
  description: "Fitness App",
  icons:{
    icon: "./browser_logo_green.PNG"
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
          <UserProvider>
          <div className="absolute inset-0 overflow-y-auto pb-[4.5rem]">
           {children}
        </div>
        <ToastContainer theme="dark"/>
        <NavFooter />
        </UserProvider>
        </ExerciseProvider>
      </body>
    </html>
  );
}


