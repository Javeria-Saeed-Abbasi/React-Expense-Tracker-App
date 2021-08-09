import React, { useState, useContext } from 'react';
//Global State
import { GlobalContext } from '../context/GlobalState';

     const AddTransaction = () => {
     const [description, setDescription] = useState ('');
     const [transactionAmount, setTransactionAmount] = useState(0);

     const { addTransaction } = useContext(GlobalContext);

     const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }
        addTransaction(newTransaction);
    }

    return (
        <div className="add-transac-container">
            <div>
                <h3>Add New Transaction </h3>
            </div>
        <hr/>
            <div>
               <form onSubmit={onSubmit}>
                   <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text"
                           id="description"
                           value= {description}
                           onChange={(e) => setDescription(e.target.value)}
                           placeholder="Details of Transaction"
                     />
                   </div>

                   <div className="form-control">
                    <label htmlFor="transactionAmount">
                    Transaction Amount
                    </label>
                    <input type="number"
                           id="transactionAmount"
                           value= {transactionAmount}
                           onChange={(e) => setTransactionAmount(e.target.value)} 
                           placeholder="Dollar Value of Transaction"/>
                   </div>

                   <button className="btn-add-am">Add Transaction</button>
               </form>
            </div>

        </div>
    )
}

export default AddTransaction;