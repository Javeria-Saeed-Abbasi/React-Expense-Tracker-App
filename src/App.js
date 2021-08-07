import React from 'react';
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import AccountSummary from './components/AccountSummary';
import TransactionHistory from './components/TransactionHistory';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';



function App() {
  return (
    <GlobalProvider>
        <div className="wrapper">
      <Header />

      <div>
      <Balance />
      </div>

      <AccountSummary/>
      <TransactionHistory/>
      <AddTransaction/>
     </div>
    </GlobalProvider>
  
  );
}

export default App;
