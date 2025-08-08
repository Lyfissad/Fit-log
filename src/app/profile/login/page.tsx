"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "react-toastify"


export default function Login(){
    const [user, setUser] = useState({
        email: "",
        password: ""
    })


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name] : e.target.value})
    }


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        try{
            const response = await fetch("https://fitlog-back-production.up.railway.app/login",
                {
                    method: "POST",
                    headers: {
                        "Content-type" : "application/json"
                    },
                    body: JSON.stringify({user})
                }
            );
            if(response.ok){
                toast.success("Login successful")
            }else(
                toast.error("Login failed")
            )
        }catch(err){
            console.log("server error", err)
        }

    }

    return(
        <div className="bg-grayBlack h-screen w-full pt-5 animate-fadeIn">
            <Image src={"/fitlog_logo_green.png"} alt="logo" width={240} height={140} className="mx-auto my-10"/>
            <h1 className="text-bold text-text-pri text-4xl p-8">Login</h1>
            <div className="flex gap-3 px-8">
                <h2 className="text-text-sec">Don&apos;t have an account?</h2>
                <Link href={"/profile/signup"} className="text-text-color transition-all duration-75 active:-translate-y-1">Signup</Link>
            </div>
            <form className="w-[20rem] mx-auto space-y-6 pt-8" onSubmit={handleSubmit}>
            <Input 
            placeholder="Email" 
            value={user.email}
            name="email"
            onChange={handleChange}
            />
            <Input 
            placeholder="Password"
            value={user.password}
            name="password"
            onChange={handleChange}
            />
            <button className="w-[20rem] h-[3rem] rounded-lg bg-priAccent mx-auto">Login</button>
            </form>
        </div>
    )
}