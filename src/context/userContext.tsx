"use client"

import { createContext, useState, useContext, ReactNode } from "react"


type User = {
    id: string,
    email: string,
    name: string
    
}


type userContextType = {
    globalUser: User | null;
    setGlobalUser: (user: User) => void
}
const userContext = createContext<userContextType | undefined>(undefined);


export const UserProvider = ({ children }: {children: ReactNode}) => {
    const [globalUser, setGlobalUser] = useState<User | null>(null);

    return(
        <userContext.Provider value = {{globalUser, setGlobalUser}}>
            {children}
        </userContext.Provider>
    )   
};


export const useUser = (): userContextType => {
    const context = useContext(userContext)
    if (!context){
        throw new Error ("useUser must be used within UserProvider")
    }
    return context;
}