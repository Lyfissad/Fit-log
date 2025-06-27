import Link from "next/link"
import { Input } from "@/components/ui/input"



export default function Signup(){
       return(
        <div className="bg-grayBlack h-screen w-full pt-5 animate-fadeIn">
            <h1 className="text-bold text-text-pri text-4xl p-8">Sign Up</h1>
            <div className="flex gap-3 px-8">
                <h2 className="text-text-sec">Already have an account?</h2>
                <Link href={"/profile/login"} className="text-priAccent transition-all duration-75 active:-translate-y-1">Login</Link>
            </div>
            <div className="w-[20rem] mx-auto space-y-6 pt-8">
            <Input placeholder="Username"/>
            <Input placeholder="Email"/>
            <Input placeholder="Password"/>
            <Input placeholder="Confirm Password"/>
            <button className="w-[20rem] h-[3rem] rounded-lg bg-priAccent mx-auto">Sign Up</button>
            </div>
        </div>
    )
}