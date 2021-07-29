import React from 'react';

 const AccountSummary = () => {
    return (
        <div className="add-summary-container">
            <div>
                <h4>Income</h4>
                <p className="inc-money">
                    +0.00
                </p>
            </div>
            <hr/>
            <div>
                <h4>Expense</h4>
                <p className="dec-money">
                    -0.00
                </p>
            </div>

        </div>
    )
}

export default AccountSummary;