import React, { useContext } from "react";
import { useState } from "react";

const MealsContext = React.createContext()

export function useContexto() {
    return useContext(MealsContext)
}

export const MealsProvider = ({ children }) => {
    const [tmb, setTmb] = useState()

    return (

        <MealsContext.Provider value={{
            tmb,
            setTmb
        }}>
            {children}
        </MealsContext.Provider>
    )

}