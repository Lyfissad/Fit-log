"use client"


import Image from "next/image"
import { secText } from "@/lib/font"
import { useUser } from "@/context/userContext"
import { headings } from "@/lib/font"
import { useRouter } from "next/navigation"


export default function Profile(){
    const router = useRouter()
    const { globalUser } = useUser()
    function logOut(){
        localStorage.clear()
        router.push("/auth")
    }
    if (!globalUser){
        return <h1>Loading...</h1>
    }
    return(
        <div className="bg-grayBlack h-screen w-full pt-5 text-text-pri">
            <Image src={"/fitlog_logo_green.png"} alt="logo" width={180} height={80} className="m-5 bg-transparent"/>
            <h1 className={`font-bold text-4xl p-5 ${secText.className}`}>Hi, {globalUser.name}</h1>
            <h3 className={`text-text-sec px-5 text-xl ${secText.className}`}>Quick Start</h3>
            <button onClick={logOut} className={`relative left-8 bg-priAccent cursor-pointer top-110 py-[0.5rem] w-[40%] text-xl rounded-md mx-auto mt-8 text-center text-text-pri border-2 border-borders ${headings.className}`}>Log Out</button>
            </div>
    )
}