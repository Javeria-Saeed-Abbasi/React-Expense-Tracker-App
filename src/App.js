import React from 'react';
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import AccountSummary from './components/AccountSummary';
import TransactionHistory from './components/TransactionHistory';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div>
      <Balance />
      </div>

      <AccountSummary/>
      <TransactionHistory/>
    </div>
  );
}

export default App;
