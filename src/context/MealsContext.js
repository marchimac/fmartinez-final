import React, { useContext } from "react";
import { useState } from "react";

/* nombro la constante para el context */
const MealsContext = React.createContext()

export function useContexto() {
    return useContext(MealsContext)
}

export const MealsProvider = ({ children }) => {
    const [tmb, setTmb] = useState()


    return (

        /* incluyo aquilo que quiero exportar para poder utilizar en cualquier lugar */
        <MealsContext.Provider value={{
            tmb,
            setTmb
        }}>
            {children}
        </MealsContext.Provider>
    )

}