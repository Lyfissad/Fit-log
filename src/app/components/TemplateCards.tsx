

type props = {
    title: string;
    details: string;
}

export default function TemplateCards({title, details}: props){
    return(
        <div className="bg-cards w-full h-[11rem] px-3 border-1 rounded-md border-[#2C2C2E] text-text-pri">
            <h3 className="text-2xl mt-2">{title}</h3>
            <p className="text-text-sec mt-5">{details}</p>
        </div>
    )
}