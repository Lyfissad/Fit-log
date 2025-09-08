export type Exercise = {
  id: string;
  name: string;
  bodyPart: string;
  target: string;
  equipment: string;
  gifUrl: string;
};

async function getExercises(offset = 0, limit = 10): Promise<Exercise[]> {
  const url = `https://exercisedb.p.rapidapi.com/exercises?limit=${limit}&offset=${offset}`;
  const headers = {
    "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPID_API_HOST || "",
  };
  const options = {
    method: "GET",
    headers: headers,
    cache: "no-store" as RequestCache,
  };
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    return data as Exercise[];
  } catch (err) {
    console.log(`Fetch didn't work:`, err);
    return [];
  }
}

export default getExercises;
