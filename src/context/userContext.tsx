"use client"

import { createContext, useState, useContext, ReactNode } from "react"


type User = {
    id: '',
    name: '',
    email: ''
}


type userContextType = {
    user: User | null;
    setGlobalUser: (user: User) => void
}
const userContext = createContext<userContextType | undefined>(undefined);


export const UserProvider = ({ children }: {children: ReactNode}) => {
    const defaultUser: User = { id: '', name: '', email: '' };
    const [user, setGlobalUser] = useState<User | null>(defaultUser);

    return(
        <userContext.Provider value = {{user, setGlobalUser}}>
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