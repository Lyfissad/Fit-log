"use client"


import Image from "next/image"
import { headings } from "@/lib/font"
import { useUser } from "@/context/userContext"


export default function Profile(){
    const { user } = useUser()
    if (!user){
        return <h1>Loading...</h1>
    }
    return(
        <div className="bg-grayBlack h-screen w-full pt-5 text-text-pri">
            <Image src={"/fitlog_logo_green.png"} alt="logo" width={180} height={80} className="m-5 bg-transparent"/>
            <h1 className={`font-bold text-5xl p-5 ${headings.className}`}>Welcome {user.name}</h1>
            <h3 className="text-text-sec px-5 text-xl">Quick Start</h3>
            </div>
    )
}