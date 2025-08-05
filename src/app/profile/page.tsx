import Link from "next/link"
import Image from "next/image"



export default function Profile(){
        return(
            <div className="bg-grayBlack h-screen w-full pt-5 text-text-pri">
            <Image src={"/fitlog_logo.png"} alt="logo" width={180} height={80} className="mx-auto my-10"/>
            <div className="flex items-center justify-center h-8/12">
                <Link href={"/profile/login"}>
                <button className="py-4 px-2 rounded-lg cursor-pointer bg-priAccent">Login/SignUp</button>
                </Link>
            </div>
            </div>
        )
}