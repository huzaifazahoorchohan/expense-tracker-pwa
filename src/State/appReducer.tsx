import { inititalStateType, ActionType } from '../Types/Type';

export const appReducer = (state: inititalStateType, action: ActionType) => {
    switch (action.type) {
        case 'DELETE':
            return {
                ...state,
                transaction: [...state.transaction.filter((value, indx) => {
                    return indx !== action.payload;
                })]
            };
        case 'ADD':
            return {
                ...state,
                transaction: [action.payload, ...state.transaction]
            }
        default:
            return state;
    }
};