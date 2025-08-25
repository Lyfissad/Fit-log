"use client"

import { useUser } from "@/context/userContext"
import Image from "next/image"
import Link from "next/link"
import { useNav } from "@/context/NavContext"

export default function Measure(){
        const { globalUser } = useUser()
        const { setGlobalNav } = useNav()

        if (!globalUser){
            return(
                <div className="animate-fadeIn">
                    <Image src={"/fitlog_logo_green.png"} alt="logo" width={250} height={160} className="mx-auto my-10"/>
                    <h1 className="text-bold text-4xl p-8">Login to access this feature</h1>
                    <div className="flex items-center mt-40 justify-center h-8/12">
                    <Link onClick={() => setGlobalNav("profile")} href={"/auth"}>
                    <button className="py-4 px-10 rounded-lg text-lg cursor-pointer bg-priAccent">Login</button>
                    </Link>
                    </div>
                </div>
            )
        }
        return(
             <div className="bg-grayBlack h-screen w-full pt-5 text-text-pri">
                <div>
                    <h1>Measurements</h1>
                    
                </div>
            </div>
        )
}