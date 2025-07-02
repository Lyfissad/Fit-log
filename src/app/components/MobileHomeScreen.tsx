import Link from "next/link"
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import TemplateTiles from "./TemplateTiles";



export default async function MobileHome(){

    return(
       <div>
            <Image src={"/fitlog_logo.png"} alt="logo" width={180} height={80} className="m-5"/>
            <h1 className="font-bold text-4xl p-5">Workouts</h1>
            <h3 className="text-text-sec px-5 text-xl">Quick Start</h3>
            <Link 
            href={"/"} 
            className="block bg-priAccent py-[0.5rem] w-[80%] rounded-md mx-auto mt-8 text-center text-text-pri border-2 border-borders">
              Start Empty Workout
              </Link>
              <div className="flex gap-x-[10rem] items-center h-[2rem] mt-5 p-7">
                <h3 className="text-text-pri text-2xl">Templates</h3>
                <div className="flex gap-x-[1rem]">
                  <IoMdAdd className="size-7"/>
                  <HiOutlineDotsHorizontal className="size-7"/>
                </div>
              </div>
              <div>
                  <TemplateTiles />
              </div>
       </div>
    )
}