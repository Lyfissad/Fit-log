import Link from "next/link"

export default function Workouts(){
    return(
        <div className="bg-grayBlack text-text-pri">
            <h1 className="font-bold text-4xl p-5">Workouts</h1>
            <Link href={"/"} className="bg-priAccent text-grayBlack w-full border-2 border-borders">Home</Link>
        </div>
    )
}