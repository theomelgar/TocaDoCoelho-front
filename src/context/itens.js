import { useState, createContext } from "react";
import useStickyState from "../hooks/index.js"
export const ItensContext = createContext()

export const ItensProvider = ({children})=>{
    const [itens, setItens] = useState(0)
    const [total, setTotal] = useState(0)
    const [cesta,setCesta] = useState([])
    return(
        <ItensContext.Provider value={{itens,setItens,total,setTotal,cesta,setCesta}}>
            {children}
        </ItensContext.Provider>
    )
}