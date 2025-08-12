"use client"

import Link from "next/link"
import Image from "next/image"
import { useUser } from "@/context/userContext"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AiOutlineLoading3Quarters } from "react-icons/ai";


export default function Auth(){
    const router = useRouter()
    const [userLoading, setUserLoading] = useState(false)
    const { setGlobalUser } = useUser()
        useEffect(() => {
            const loggedIn = localStorage.getItem("user")
            if (loggedIn){
            try{
                setUserLoading(true)
                setGlobalUser(JSON.parse(loggedIn))
                router.push("/auth/profile")
            }catch(err){
                console.error("localstorage issue for user profile", err)
    
            }
        }
        },[])
        return(
           userLoading? 
           <div className="flex items-center justify-center h-full w-full">
                            <AiOutlineLoading3Quarters 
                                className="fill-text-color size-15 animate-spin" 
                            />
            </div> : 
            
            <div className="bg-grayBlack h-screen w-full pt-5 text-text-pri">
            <Image src={"/fitlog_logo_green.png"} alt="logo" width={250} height={160} className="mx-auto my-10"/>
            <div className="flex items-center justify-center h-8/12">
                <Link href={"/auth/login"}>
                <button className="py-4 px-2 rounded-lg cursor-pointer bg-priAccent">Login/SignUp</button>
                </Link>
            </div>
            </div>
        )
}