import React , {createContext, useReducer, useContext} from "react"; 

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our App and provide the dataLayer
export const StateProvider = ({reducer, initialState, children}) => {
    return <StateContext.Provider value={useReducer(reducer, initialState)}> 
            {children}
        </StateContext.Provider>
};

// Pull information from the dataLayer
export const useStateValue = () => useContext(StateContext);