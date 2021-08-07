import { React, useContext} from 'react';

//Transaction Component 
import Transaction from './Transaction';

//Global State
import { GlobalContext } from '../context/GlobalState';

 const TransactionHistory = () => {
     const { transactions } = useContext(GlobalContext);
     

    return (
        
        <div className="transac-his-container">
            <div>
                <h3>Transaction History</h3>
            </div>
            <hr/>
        
            <div>
                <ul className="transac-list">
                    {/* <li className="plus">
                            <p>List item 1</p>
                            <span>+ $1000</span>
                            <button className="del-btn"><FaTrashAlt className="del-btn"/></button>
                    </li> */}
                    {transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction}/>
                    ))}
                

                </ul>
            </div>

        </div>
    )
}

export default TransactionHistory;