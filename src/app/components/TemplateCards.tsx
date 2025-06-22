

type props = {
    id: string;
    title: string;
    target: string;
}

export default function TemplateCards({id,title, target}: props){
    return(
        <div key = {id} className="bg-cards w-full h-[11rem] px-3 border-1 rounded-md border-[#2C2C2E] text-text-pri">
            <h3 className="text-xl mt-2">{title}</h3>
            <p className="text-text-sec mt-2">{target}</p>
        </div>
    )
}