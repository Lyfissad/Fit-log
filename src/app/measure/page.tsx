"use client"

import { useUser } from "@/context/userContext"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useNav } from "@/context/NavContext"
import { headings, secText,secTextBold } from "@/lib/font"


export default function Measure(){
        const { globalUser, setGlobalUser } = useUser()
        useEffect(() => {
                    const loggedIn = localStorage.getItem("user")
                    const sessionLoggedIn = sessionStorage.getItem("user")
                    if(sessionLoggedIn){
                        try{
                            setGlobalUser(JSON.parse(sessionLoggedIn))
                        }catch(err){
                            console.error("sessionStorage issue for user profile", err)
                        }
                    }
                    if (loggedIn){
                    try{
                        setGlobalUser(JSON.parse(loggedIn))
                    }catch(err){
                        console.error("localStorage issue for user profile", err)
            
                    }
                }
                },[])
        
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
                    <h1 className={`text-4xl m-5 ${headings.className}`}>Your Measurements</h1>
                    <div>
                        <div className="bg-cards p-3 mt-5 border-1 rounded-2xl border-[#2C2C2E] w-[20rem] mx-auto">
                            <h3 className={`text-text-color ${secTextBold.className}`}>Weight</h3>
                            <div className={`flex gap-x-35 mt-3 ${secText.className}`}>
                                <h4>Last weight</h4>
                                <h4>date</h4>
                            </div>
                        </div>
                        <div className="bg-cards p-3 mt-5 border-1 rounded-2xl border-[#2C2C2E] w-[20rem] mx-auto">
                            <h3 className={`text-text-color ${secTextBold.className}`}>waist</h3>
                            <div className={`flex gap-x-35 mt-3 ${secText.className}`}>
                                <h4>Last waist</h4>
                                <h4>date</h4>
                            </div>
                        </div>
                        <div className="bg-cards p-3 mt-5 border-1 rounded-2xl border-[#2C2C2E] w-[20rem] mx-auto">
                            <h3 className={`text-text-color ${secTextBold.className}`}>Body Fat %</h3>
                            <div className={`flex gap-x-35 mt-3 ${secText.className}`}>
                                <h4>Last Fat</h4>
                                <h4>date</h4>
                            </div>
                        </div>
                         <button className={`py-2 px-6 rounded-lg text-lg cursor-pointer bg-priAccent ${secText.className}`}>add Measurements</button>
                    </div>
                    
                </div>
            </div>
        )
}