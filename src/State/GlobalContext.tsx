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

    let getIncome = () => {
        let income: number = 0;
        for (let index = 0; index < state.transaction.length; index++) {
            if (state.transaction[index].amount > 0) {
                income = income + state.transaction[index].amount;
            }

        }
        return income;
    }
    let getExpense = () => {
        let expense: number = 0;
        for (let index = 0; index < state.transaction.length; index++) {
            if (state.transaction[index].amount < 0) {
                expense = expense + state.transaction[index].amount;
            }

        }
        return expense;
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