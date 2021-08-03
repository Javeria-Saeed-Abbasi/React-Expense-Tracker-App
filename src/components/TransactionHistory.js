import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';


 const TransactionHistory = () => {
    return (
        
        <div className="transac-his-container">
            <div>
                <h3>Transaction History</h3>
            </div>
            <hr/>
        
            <div>
                <ul className="transac-list">
                    <li className="plus">
                            <p>List item 1</p>
                            <span>+ $1000</span>
                            <button className="del-btn"><FaTrashAlt className="del-btn"/></button>
                    </li>
                    <li className="minus">
                            <p>List item 2</p>
                            <span>- $1000</span>
                            <button className="del-btn"><FaTrashAlt className="del-btn"/></button>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default TransactionHistory;