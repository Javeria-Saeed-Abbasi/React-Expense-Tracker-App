import { utimes } from 'fs';
import React, { useContext} from 'react';

//Global State
import { GlobalContext } from '../context/GlobalState';

 const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
    const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0 ).toFixed(2);
    
    return (
        <div className="container">
            <h3>Your Current Balance</h3>
            <h1 id="Balance">$ {balance}</h1>
        </div>
    )
}

export default Balance;