import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducers/reducer";

const CountContext = createContext();


const Provider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <CountContext.Provider value={[state, dispatch]}>
            {children}
        </CountContext.Provider>
    )
}

export {CountContext, Provider};