"use client";
import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa";
import { TbRuler2 } from "react-icons/tb";
import Link from "next/link"
import { useState } from "react";



export default function NavFooter(){
    const [activeTab, setActiveTab] = useState("work")


    return(
        <footer className="fixed bottom-0 left-0 w-full z-50  ">
          <ul className="flex bg-cards border-t border-[#2C2C2E] justify-center text-sm h-[4rem]">

            <Link href={"/auth"}>
              <li 
              onClick={() => {setActiveTab("profile")}} 
              className={`px-4 min-w-18 text-s transition-all duration-250 ${activeTab === "profile"? "text-text-color" : "text-text-sec"}`}
              >

                <CgProfile className={`size-7 mx-auto my-1 transition-all duration-250 ${activeTab === "profile"? "text-text-color" : "text-text-sec"}`}
                />
                Profile

                </li>
            
            </Link>

            <Link href={"/history"}>

            <li 
            onClick={() => {setActiveTab("history")}} 
            className={`px-3 min-w-18 text-center text-s transition-all duration-250 ${activeTab === "history"? "text-text-color" : "text-text-sec"}`}
            >
              
              <FaHistory 
              className={`size-7 mx-auto my-1 transition-all duration-250 ${activeTab === "history"? "text-text-color" : "text-text-sec"}`}
              />
              History

              </li>
              
              </Link>
            
            <Link href={"/?resize=true"}>
            
            <li 
            onClick={() => {setActiveTab("work")}} 
            className={`px-3 min-w-18 text-s transition-all duration-250 ${activeTab === "work"? "text-text-color" : "text-text-sec"}`}
            >
              <IoMdAdd 
              className={`size-7 mx-auto my-1 transition-all duration-250 ${activeTab === "work"? "text-text-color" : "text-text-sec"}`}
              />
              Workouts
              </li>

              </Link>

            <Link href={"/excercises"}>

            <li 
            onClick={() => {setActiveTab("exercise")}} 
            className={`px-3 min-w-18 text-s transition-all duration-250 ${activeTab === "exercise"? "text-text-color" : "text-text-sec"}`}>
              <FaDumbbell className={`size-7 mx-auto my-1 transition-all duration-250 ${activeTab === "exercise"? "text-text-color" : "text-text-sec"}`}
              
              />
              Exercises
              
              </li>
             
              </Link>
            
            <Link href={"/measure"}>
            <li 
            onClick={() => {setActiveTab("measure")}} 
            className={`px-3 min-w-18 text-s transition-all duration-250 ${activeTab === "measure"? "text-text-color" : "text-text-sec"}`}
            
            >
              
              <TbRuler2 className={`size-7 mx-auto my-1 transition-all duration-250 ${activeTab === "measure"? "text-text-color" : "text-text-sec"}`}
              
              />
              
              Measure
            
            </li>
            
            </Link>
          </ul>
        </footer>
    )
}