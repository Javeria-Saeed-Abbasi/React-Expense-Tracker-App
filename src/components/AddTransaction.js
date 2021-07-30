import React from 'react';


 const AddTransaction = () => {
    return (
        <div className="add-transac-container">
            <div>
                <h3>Add New Transaction </h3>
            </div>
        
            <div>
               <form>
                   <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text" placeholder="Details of Transaction"/>
                   </div>
               </form>
            </div>

        </div>
    )
}

export default AddTransaction;