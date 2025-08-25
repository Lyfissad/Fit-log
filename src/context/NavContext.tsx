"use client"

import { createContext, useState, useContext, ReactNode } from "react"



type navContextType = {
    globalNav: string | null;
    setGlobalNav: (nav: string | null) => void
}
const navContext = createContext<navContextType | undefined>(undefined);


export const NavProvider = ({ children }: {children: ReactNode}) => {
    const [globalNav, setGlobalNav] = useState<string | null>("work");

    return(
        <navContext.Provider value = {{globalNav, setGlobalNav}}>
            {children}
        </navContext.Provider>
    )   
};


export const useNav = (): navContextType => {
    const context = useContext(navContext)
    if (!context){
        throw new Error ("useNav must be used within UserProvider")
    }
    return context;
}