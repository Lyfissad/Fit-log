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
          <ul className="flex bg-[#1C1C1E] border-t border-[#2C2C2E] justify-center text-sm h-[4rem]">
            <li onClick={() => {setActiveTab("profile")}} className={`px-4 min-w-18 text-xs transition-all duration-250 ${activeTab === "profile"? "text-text-pri" : "text-text-sec"}`}>
              <Link href={"/profile"}>
              <CgProfile className={`size-7 mx-auto my-1 transition-all duration-250 ${activeTab === "profile"? "text-text-pri" : "text-text-sec"}`}/>
              Profile
              </Link>
            </li>
            <li onClick={() => {setActiveTab("history")}} className={`px-3 min-w-18 text-center text-xs transition-all duration-250 ${activeTab === "history"? "text-text-pri" : "text-text-sec"}`}>
              <Link href={"/history"}>
              <FaHistory className={`size-7 mx-auto my-1 transition-all duration-250 ${activeTab === "history"? "text-text-pri" : "text-text-sec"}`}/>
              History
              </Link>
            </li>
            <li onClick={() => {setActiveTab("work")}} className={`px-3 min-w-18 text-xs transition-all duration-250 ${activeTab === "work"? "text-text-pri" : "text-text-sec"}`}>
              <Link href={"/?resize=true"}>
              <IoMdAdd className={`size-7 mx-auto my-1 transition-all duration-250 ${activeTab === "work"? "text-text-pri" : "text-text-sec"}`}/>
              Workouts
              </Link>
            </li>
            <li onClick={() => {setActiveTab("exercise")}} className={`px-3 min-w-18 text-xs transition-all duration-250 ${activeTab === "exercise"? "text-text-pri" : "text-text-sec"}`}>
              <Link href={"/excercises"}>
              <FaDumbbell className={`size-7 mx-auto my-1 transition-all duration-250 ${activeTab === "exercise"? "text-text-pri" : "text-text-sec"}`}/>
              Exercises
              </Link>
            </li>
            <li onClick={() => {setActiveTab("measure")}} className={`px-3 min-w-18 text-xs transition-all duration-250 ${activeTab === "measure"? "text-text-pri" : "text-text-sec"}`}>
              <Link href={"/measure"}>
              <TbRuler2 className={`size-7 mx-auto my-1 transition-all duration-250 ${activeTab === "measure"? "text-text-pri" : "text-text-sec"}`}/ >
              Measure
              </Link>
            </li>
          </ul>
        </footer>
    )
}