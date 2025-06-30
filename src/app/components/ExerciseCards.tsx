

type props = {
    id: string
    title: string
    target: string
}

export default function ExerciseCards({id,title, target}: props){
    return(
        <div key={id} className="w-auto mx-2 border-1 p-3 space-y-2 border-[#2C2C2E] bg-cards rounded-sm">
            <h1 className="text-text-pri font-bold text-md">{title}</h1>
            <h4 className="text-text-sec">{target}</h4>
        </div>
    )
}