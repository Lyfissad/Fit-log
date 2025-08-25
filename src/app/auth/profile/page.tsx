"use client"


import Image from "next/image"
import { secText } from "@/lib/font"
import { useUser } from "@/context/userContext"
import { headings } from "@/lib/font"
import { useRouter } from "next/navigation"


export default function Profile(){
    const router = useRouter()
    const { globalUser, setGlobalUser } = useUser()

    function logOut(){
        localStorage.clear()
        sessionStorage.clear()
        setGlobalUser(null)
        router.push("/auth")
    }
    if (!globalUser){
        return <h1>There was an error please refresh</h1>
    }
    return(
        <div className="bg-grayBlack h-screen w-full pt-5 text-text-pri">
            <div className="flex">
                <Image src={"/fitlog_logo_green.png"} alt="logo" width={180} height={80} className="m-5 bg-transparent"/>
                <button onClick={logOut} className={`relative bg-priAccent cursor-pointer left-3 bottom-4 w-[25%] text-xl rounded-xl mx-auto mt-8 text-center text-text-pri border-2 border-borders ${headings.className}`}>Log Out</button>
            </div>
            <h1 className={`font-bold text-4xl p-5 ${secText.className}`}>Hi, {globalUser.name}</h1>
            <h3 className={`text-text-sec px-5 text-xl ${secText.className}`}>Quick Start</h3>
            </div>
    )
}