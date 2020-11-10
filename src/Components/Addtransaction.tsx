import React, { useContext, useState } from 'react';
import { TransactionContext } from '../State/GlobalContext';

const Addtransaction: React.FC = () => {
    let [description, setDescription] = useState("");
    let [amount, setAmount] = useState(0);
    let { addtransaction } = useContext(TransactionContext)
    let addTrans = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addtransaction({
            description,
            amount,
        });
        setDescription("");
        setAmount(0);
    }
    return (
        <div className="transaction">
            <h4 className="transaction-heading">add transaction</h4>
            <form onSubmit={addTrans} >
                <input type='text' placeholder="Description..." required value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type='number' placeholder="Amount..." required value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
                <button>ADD TRANSACTION</button>
            </form>
        </div>
    )
};

export default Addtransaction;