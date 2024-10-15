import { useContext } from "react"
import { HiddenContext } from "../context/HiddeContext"


export const useHiddenContext = () => {
    const context = useContext(HiddenContext)

    if(!context) {
        throw new Error("Context must have a value")
    }

    return context
}