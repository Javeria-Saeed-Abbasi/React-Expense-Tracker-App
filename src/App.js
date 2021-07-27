import React from 'react';
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import AccountSummary from './components/AccountSummary';


function App() {
  return (
    <div className="wrapper">
      <Header />

      <div>
      <Balance />
      </div>

      <AccountSummary/>
    </div>
  );
}

export default App;
