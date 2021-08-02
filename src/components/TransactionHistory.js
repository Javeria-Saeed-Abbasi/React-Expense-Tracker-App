import React from 'react';


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
                            <button className="del-btn">delete</button>
                    </li>
                    <li className="minus">
                            <p>List item 2</p>
                            <span>- $1000</span>
                            <button className="del-btn">delete</button>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default TransactionHistory;