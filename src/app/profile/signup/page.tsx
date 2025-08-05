"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import { toast } from "react-toastify"

export default function Signup(){
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewUser({...newUser, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        try{
            const res = await fetch("https://fitlog-back-production.up.railway.app/signup",
                {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json" 
            },body: JSON.stringify(newUser)}
        )
        const data = await res.json()

        if(res.ok){
            toast.success("Account Created!")
            console.log(data)
            setNewUser({
                name: "",
                email: "",
                password: ""
            });
        }else{
            toast.error("Sign up failed")
        }

    }catch(err){
        console.error("Error:", err)
        toast.error("Something went wrong")
    }
}







       return(
        <div className="bg-grayBlack h-screen w-full pt-5 animate-fadeIn">
            <Image src={"/fitlog_logo.png"} alt="logo" width={180} height={80} className="mx-auto my-10"/>
            <h1 className="text-bold text-text-pri text-4xl p-8">Sign Up</h1>
            <div className="flex gap-3 px-8">
                <h2 className="text-text-sec">Already have an account?</h2>
                <Link href={"/profile/login"} className="text-priAccent transition-all duration-75 active:-translate-y-1">Login</Link>
            </div>
            <form onSubmit={handleSubmit} className="w-[20rem] mx-auto space-y-6 pt-8" >
            <Input 
                placeholder="Name"
                name="name"
                type="text"
                value={newUser.name}
                onChange={handleChange}
                    />
            <Input 
                placeholder="Email"
                name="email"
                type="email"
                value={newUser.email}
                onChange={handleChange}
                />
            <Input 
                placeholder="Password"
                name="password"
                type="password"
                value={newUser.password}
                onChange={handleChange}
                />
            <button type="submit" className="w-[20rem] h-[3rem] cursor-pointer rounded-lg bg-priAccent mx-auto">Sign Up</button>
            </form>
        </div>
    )
}