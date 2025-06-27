import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function Login(){
    return(
        <div className="bg-grayBlack h-screen w-full pt-5 animate-fadeIn">
            <h1 className="text-bold text-text-pri text-4xl p-8">Login</h1>
            <div className="flex gap-3 px-8">
                <h2 className="text-text-sec">Don&apos;t have an account?</h2>
                <Link href={"/profile/signup"} className="text-priAccent transition-all duration-75 active:-translate-y-1">Signup</Link>
            </div>
            <div className="w-[20rem] mx-auto space-y-6 pt-8">
            <Input placeholder="Email"/>
            <Input placeholder="Password"/>
            <button className="w-[20rem] h-[3rem] rounded-lg bg-priAccent mx-auto">Login</button>
            </div>
        </div>
    )
}