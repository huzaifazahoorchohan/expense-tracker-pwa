import React, { createContext, useReducer } from 'react';
import { inititalStateType, stateType } from '../Types/Type';
import { appReducer } from './appReducer';

let initialState: inititalStateType = {
    transaction: [],
    addtransaction: () => { },
    deletetransaction: () => { },
};

export const TransactionContext = createContext(initialState);

export const TransactionProvide: React.FC = ({ children }) => {
    let [state, dispatch] = useReducer(appReducer, initialState);
    let addtransaction = (trans: stateType) => {
        dispatch({
            type: "ADD",
            payload: trans,
        })
    };
    let deletetransaction = (id: number) => {
        dispatch({
            type: "DELETE",
            payload: id,
        })
    }

    return (
        <TransactionContext.Provider value={{
            transaction: state.transaction,
            addtransaction,
            deletetransaction,
        }}>
            {children}
        </TransactionContext.Provider>
    )
};