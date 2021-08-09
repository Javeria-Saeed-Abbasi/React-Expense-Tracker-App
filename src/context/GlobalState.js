import React, { createContext, useReducer } from 'react' ;
//Import Reducer
import AppReducer from "./AppReducer";


//Initial State
const initialState = {
    transactions: []

}

//Global Context
export const GlobalContext = createContext(initialState);

//Provider for the Global Context
export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions for Transaction
     function delTransaction(id) {
         dispatch({
             type: 'DELETE_TRANSACTION',
             payload: id
         });
     }

     //Add New Transaction
     function addTransaction(transaction) {
         dispatch({
             type: 'ADD_TRANSACTION',
             payload: transaction
         })
     }
    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}