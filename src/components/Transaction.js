import React, { useContext } from 'react';

//Global State
import { GlobalContext } from '../context/GlobalState';
//Font-Awesome
import { FaTrashAlt } from 'react-icons/fa';

const Transaction = ({ transaction }) => {
    const { delTransaction } = useContext(GlobalContext);

    const sign = transaction.transactionAmount > 0 ? '+': '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';

    return (
        <div>
             <li className={transactionType}>
                {transaction.description}
                <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
                <button className="del-btn"
                onClick={() => delTransaction(transaction.id)}><FaTrashAlt className="del-btn"/></button>
            </li>
        </div>
    )
}

export default Transaction;