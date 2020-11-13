import React from 'react';
import './App.css';
import Balance from './Components/Balance';
import IncomeExpense from './Components/IncomeExpense';
import Summary from './Components/Summary';
import Addtransaction from './Components/Addtransaction';
import { TransactionProvide } from './State/GlobalContext';

const App: React.FC = () => {
  return (
    <TransactionProvide>
      <div className="main">
        <h6 className="heading" >Expense Tracker</h6>
        <Balance />
        <IncomeExpense />
        <Summary />
        <Addtransaction />
      </div>
    </TransactionProvide>
  )
};
export default App;