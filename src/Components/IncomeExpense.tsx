import React, { useContext } from 'react';
import { TransactionContext } from '../State/GlobalContext';

const IncomeExpense: React.FC = () => {
    let { transaction } = useContext(TransactionContext);

    const amounts = transaction.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    return (
        <div className="i-e">
            <div className="income">
                <div className="i-box">
                    <h5>Income</h5>
                    <h5>${income}</h5>
                </div>
            </div>
            <div className="expense">
                <div className='i-box'>
                    <h5>Expense</h5>
                    <h5>${expense}</h5>
                </div>
            </div>
        </div>
    )
};

export default IncomeExpense;