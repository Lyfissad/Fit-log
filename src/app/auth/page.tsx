import Link from "next/link"
import Image from "next/image"



export default function Auth(){
        return(
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