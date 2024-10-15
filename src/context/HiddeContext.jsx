import { createContext, useContext, useEffect, useReducer } from "react";

export const HiddenContext = createContext()

const initialState = {
    PEDRO : 0,
    ANYMORE: 0,
    PRODUCT: 0,
    RAYCAST: 0,
    NEEDED: 0,
    HATS: 0,
    PRODUC: 0,
    RAINBOW: 0,
    MODULZ: 0,
    RADIX: 0,
    STITCHES: 0,
    BARCELONA: 0,
    SAOPAULO: 0,
    NORWICH: 0,
    X: 0
}

export const hiddenReducer = (state, action) => {
    const {type, payload} = action
    switch(type) {
        case "PEDRO" :
            return {...state, PEDRO: payload}
        case "ANYMORE" :
            return {...state, ANYMORE: payload}
        case "PRODUCT" :
            return {...state, PRODUCT: payload}
        case "RAYCAST" :
            return {...state, RAYCAST: payload}
        case "NEEDED" :
            return {...state, NEEDED: payload}
        case "HATS" :
            return {...state, HATS: payload}
        case "PRODUC" :
            return {...state, PRODUC: payload}
        case "RAINBOW" :
            return {...state, RAINBOW: payload}
        case "MODULZ" :
            return {...state, MODULZ: payload}
        case "RADIX" :
            return {...state, RADIX: payload}
        case "STITCHES" :
            return {...state, STITCHES: payload}
        case "BARCELONA" :
            return {...state, BARCELONA: payload}
        case "SAOPAULO" :
            return {...state, SAOPAULO: payload}
        case "NORWICH" :
            return {...state, NORWICH: payload}
        case "X" :
            return {...state, X: payload}
        default:
            throw new Error(`No case of type ${type} registered`)
    }
}

export const HiddenContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(hiddenReducer, initialState)


    return (
        <HiddenContext.Provider value={{...state, dispatch}}>
            {children}
        </HiddenContext.Provider>
    )
}