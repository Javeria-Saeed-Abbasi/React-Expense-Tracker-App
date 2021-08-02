import React from 'react';


 const AddTransaction = () => {
    return (
        <div className="add-transac-container">
            <div>
                <h3>Add New Transaction </h3>
            </div>
        <hr/>
            <div>
               <form>
                   <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text" placeholder="Details of Transaction"/>
                   </div>

                   <div className="form-control">
                    <label htmlFor="transactionAmount">
                    Transaction Amount
                    </label>
                    <input type="number" placeholder="Dollar Value of Transaction"/>
                   </div>

                   <button className="btn-add-am">Add Transaction</button>

               </form>
            </div>

        </div>
    )
}

export default AddTransaction;