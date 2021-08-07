import React  from 'react';
//Font-Awesome
import { FaTrashAlt } from 'react-icons/fa';

const Transaction = ({ transaction }) => {
    const sign = transaction.transactionAmount > 0 ? '+': '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';

    return (
        <div>
             <li className={transactionType}>
                {transaction.description}
                <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
                <button className="del-btn"><FaTrashAlt className="del-btn"/></button>
            </li>
        </div>
    )
}

export default Transaction;