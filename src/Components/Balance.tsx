import React, { useContext } from 'react';
import { TransactionContext } from '../State/GlobalContext';

const Balance: React.FC = () => {
    let { transaction } = useContext(TransactionContext);

    let getIncome = () => {
        let income = 0;
        for (let index = 0; index < transaction.length; index++) {
            if (transaction[index].amount > 0) {
                income = income + transaction[index].amount;
            }

        }
        return income;
    }

    let getExpense = () => {
        let expense = 0;
        for (let index = 0; index < transaction.length; index++) {
            if (transaction[index].amount < 0) {
                expense = expense + transaction[index].amount;
            }

        }
        return expense;
    }

    let total = getIncome() + getExpense();

    let sign: string = "";

    if (total >= 0) {
        sign = "$"
    } else {
        sign = "-$"
    }


    return (
        <div className="balance" >
            <h3 className="balance-heading">Balance</h3>
            <h3 className="balance-amount">{sign + Math.abs(total).toFixed(2)}</h3>
        </div>
    )
};

export default Balance;