import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const backendUrl = "http://127.0.0.1:5000"
    const [displaySidebarMobile,setDisplaySidebarMobile] = useState(false)
    
    const value = {
        backendUrl,displaySidebarMobile,setDisplaySidebarMobile
    }

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>

}