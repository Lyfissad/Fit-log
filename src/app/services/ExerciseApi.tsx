type Exercise = {
  id: string;
  name: string;
  bodyPart: string;
  target: string;
  equipment: string;
  gifUrl: string;
};





async function getExercises():Promise<Exercise[]>{
    const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': process.env.RAPID_API_KEY || '',
            'x-rapidapi-host': process.env.RAPID_API_HOST || ''
        }
    };
    try{
         const res = await fetch(url,options)

         if (!res.ok){
            throw new Error(`API error: ${res.status}`)
         }

        const data = await res.json()
        return data as Exercise[] 
    }
    catch(err){
        console.log(`Fetch didn't work:`, err)
        return []
    }
}


export default getExercises;