"use client"

import { createContext, ReactNode, useEffect, useState } from "react"




export const exerciseContext = createContext({})


export default function ExerciseProvider({children}: {children: ReactNode}){
        const [exercises, setExercises] = useState([])


        useEffect(() => {
                fetch("https://wger.de/api/v2/exercisecategory/")
                .then(res => res.json())
                .then (data => setExercises(data))
        },[])
        

        return(
                <exerciseContext.Provider value = {exercises}>
                        {children}
                </exerciseContext.Provider>
        )
}       