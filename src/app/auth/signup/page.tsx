"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import { toast } from "react-toastify"
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { useRouter } from "next/navigation"


export default function Signup(){
    const router = useRouter()
    const [showIcon, setShowIcon] = useState(true)
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        cPassword: ""
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
                password: "",
                cPassword: ""
            });
            router.push("/auth/login")
        }else{
            toast.error("Sign up failed passwords don't match")
        }

    }catch(err){
        console.error("Error:", err)
        toast.error("Something went wrong")
    }
}


        function switchShow(){
            setShowIcon(!showIcon)
        }



        const showType = showIcon? "password" : "text"
        return(
        <div className="bg-grayBlack h-screen w-full pt-5 animate-fadeIn">
            <Image src={"/fitlog_logo_green.png"} alt="logo" width={240} height={140} className="mx-auto my-10"/>
            <h1 className="text-bold text-text-pri text-4xl p-8">Sign Up</h1>
            <div className="flex gap-3 px-8">
                <h2 className="text-text-sec">Already have an account?</h2>
                <Link href={"/auth/login"} className="text-text-color transition-all duration-75 active:-translate-y-1">Login</Link>
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
            <div className="flex">
            <Input 
                placeholder="Password"
                name="password"
                type={showType}
                value={newUser.password}
                onChange={handleChange}
                />
                {showIcon?
                 <BiSolidShow onClick={switchShow} className="absolute right-10 fill-text-color cursor-pointer size-5 mt-2"/> : 
                 <BiSolidHide onClick={switchShow} className="absolute right-10 fill-text-color cursor-pointer size-5 mt-2"/>}  
            </div>
            <Input 
                placeholder="Confirm Password"
                name="cPassword"
                type={showType}
                value={newUser.cPassword}
                onChange={handleChange}
                />
            <button type="submit" className="w-[20rem] h-[3rem] cursor-pointer rounded-lg bg-priAccent mx-auto">Sign Up</button>
            </form>
        </div>
    )
}