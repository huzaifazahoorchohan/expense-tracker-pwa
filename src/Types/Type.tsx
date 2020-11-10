export interface inititalStateType {
    transaction: { description: string, amount: number }[],
    addtransaction: (trans: stateType) => void,
    deletetransaction: (id: number) => void,
};

export interface stateType {
    description: string,
    amount: number,
};

export type ActionType =
    | { type: "ADD", payload: stateType, }
    | { type: "DELETE", payload: number }