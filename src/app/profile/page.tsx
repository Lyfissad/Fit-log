import Link from "next/link"




export default function Profile(){
        return(
            <div className="bg-grayBlack h-screen w-full pt-5 text-text-pri">
            <h1 className="font-bold p-8 text-4xl">Profile</h1>
            <Link href={"/profile/login"}>Login(temporary until state)</Link>
            </div>
        )
}