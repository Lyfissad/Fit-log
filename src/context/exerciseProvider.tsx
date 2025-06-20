"use client"

import { createContext, ReactNode, useState } from "react"




export excerciseContext = createContext({})


export default function ExerciseProvider({children}: {children: ReactNode}){
        const [exercises, setExercises] = useState([])


        
}