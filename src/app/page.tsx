import getExercises from "./services/ExerciseApi"
import MobileHome from "./components/MobileHomeScreen"

export default async function Home(){
  const exer = await getExercises()
  console.log(`exer:`,exer)
  return(
    <div className="bg-grayBlack h-screen w-full pt-5 text-text-pri">
            <MobileHome />
    </div>
  )
} 