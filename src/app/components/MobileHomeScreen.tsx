"use client"

import Link from "next/link"
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { headings, secText } from "@/lib/font";





export default function MobileHome(){
    const [resize, setResize] = useState(false)
    const searchParams = useSearchParams()


    const openMobileView = () => {
      window.open('/?resize=true', '_blank', 'width=390,height=874');
    }

    useEffect(() => {
    const param = searchParams.get('resize');
    if (param === 'true') {
      setResize(true);
    }
  }, [searchParams]);


    return(
      <div>
         {resize? null : 
         <div className="fixed inset-0 flex items-center justify-center bg-opacity-60 z-50">
         <div className={`z-50 bg-cards w-[24rem] h-55 border-2 border-grayBlack rounded-lg text-md justify-center text-center top-74 ${secText.className}`}>
              <h2>This app is an MVP and designed for smartphones. Please resize your window by clicking the button below.</h2>
              <button className={`bg-priAccent w-[15rem] h-[3rem] mt-5 text-lg rounded-md cursor-pointer text-text-pri ${headings.className}`} onClick={() => {
                openMobileView()
                setResize(!resize)
                }}>Resize</button>
          </div>
          </div>
          }
       <div className={`${resize? "" : "blur-xs"}`}>
            <Image src={"/fitlog_logo_green.png"} alt="logo" width={180} height={80} className="m-5 bg-transparent"/>
            <h1 className={`font-bold text-5xl p-5 ${headings.className}`}>Workouts</h1>
            <h3 className="text-text-sec px-5 text-xl">Quick Start</h3>
            <Link 
            href={"/"} 
            className={`block bg-priAccent py-[0.5rem] w-[80%] rounded-md mx-auto mt-8 text-center text-text-pri border-2 border-borders ${headings.className}`}>
              Start Empty Workout
              </Link>
              <div className="flex gap-x-[10rem] items-center h-[2rem] mt-5 p-7">
                <h3 className={`text-text-pri text-2xl ${headings.className}`}>Templates</h3>
                <div className="flex gap-x-[1rem]">
                  <IoMdAdd className="size-7"/>
                  <HiOutlineDotsHorizontal className="size-7"/>
                </div>
              </div>
              <div className="h-[10rem] border-1 border-[#2C2C2E] cursor-pointer flex justify-center text-center items-center w-1/2 m-4 rounded-2xl bg-cards">
              <h2 className={`text-lg p-4 text-text-color ${secText.className}`}>Tap to add Template</h2>
              </div>
       </div>
       </div>
    )
}