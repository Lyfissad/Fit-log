import Link from "next/link"
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

export default function Home(){
  return(
    <div className="bg-grayBlack h-[49rem] w-full pt-5 text-text-pri">
            <div className="flex justify-end">
              <FaSearch className="size-7 mx-5"/>
            </div>
            <h1 className="font-bold text-4xl p-5">Workouts</h1>
            <h3 className="text-text-sec px-5 text-xl">Quick Start</h3>
            <Link 
            href={"/"} 
            className="block bg-priAccent py-[0.5rem] w-[80%] mx-auto mt-8 text-center text-text-pri border-2 border-borders">
              Start Empty Workout
              </Link>
              <div className="flex gap-x-[8rem] items-center h-[2rem] mt-5 p-7">
                <h3 className="text-text-pri text-2xl">Templates</h3>
                <div className="">
                  <IoMdAdd className="size-7"/>
                </div>
              </div>
    </div>
  )
} 