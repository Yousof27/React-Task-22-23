/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { initialCounterValue, reducer } from "../reducer";

export const reducerContext = createContext({});

export const ReducerContextProvider = ({ children }) => {
    const [count, dispatch] = useReducer(reducer, initialCounterValue);

    return (
        <>
            <reducerContext.Provider value={{ count, dispatch }}>
                <h2>Task 2</h2>
                <p>useReducer With useContext</p>
                <br />
                <h2>3rd Counter: {count}</h2>
                {children}
            </reducerContext.Provider>
        </>
    )
}

export const useCounterContext = () => useContext(reducerContext);
