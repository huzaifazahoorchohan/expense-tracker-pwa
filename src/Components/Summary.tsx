import React, { useContext } from 'react';
import { TransactionContext } from '../State/GlobalContext';

const Summary: React.FC = () => {
    let { transaction, deletetransaction } = useContext(TransactionContext);
    return (
        <div className="summary">
            <h4 className="summary-heading">Summary</h4>
            <ul className="history-ul">
                {transaction.map((item, indx) => {
                    return <li key={indx} >{item.description}<span>{item.amount >= 0 ? "$" + item.amount : "-$" + Math.abs(item.amount)}</span><button className="delete-btn" onClick={() => deletetransaction(indx)} >X</button></li>
                })}
            </ul>
        </div>
    )
};

export default Summary;