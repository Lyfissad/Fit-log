type Exercise = {
    id : number;
    name: string;
    description: string;
}




async function getExercises():Promise<Exercise[]>{
    try{
         const res = await fetch("https://wger.de/api/v2/exercise/?language=2&limit=10")

         if (!res.ok){
            throw new Error(`API error: ${res.status}`)
         }

        const data = await res.json()
        return data?.results as Exercise[] 
    }
    catch(err){
        console.log(`Fetch didn't work:`, err)
        return []
    }
}


export default getExercises;