import ExerciseCards from "./ExerciseCards";
import getExercises from "../services/ExerciseApi";


export default async function ExerciseTiles(){
        const exer = await getExercises()
            const tiles = exer.map((item) => (
              <ExerciseCards key = {item.id} id = {item.id} title = {item.name} target = {item.target} />
            ))
        return(
            <div className="grid space-y-2 px-9 items-center justify-center w-full">
                {tiles}
            </div>
        )

}   