import React, { useState } from 'react';
import Transaction from './components/Transaction';
import TransactionForm from './components/TransactionForm';
import Filter from './components/Filter';
import './App.css'
  const App = () => {
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
  
    const handleAddTransaction = (newTransaction) => {
      setTransactions([...transactions, newTransaction]);
      setFilteredTransactions([...filteredTransactions, newTransaction]); 
    };

    const handleSearch = (searchTerm) => {
      if (!searchTerm) {
        setFilteredTransactions(transactions);
      } else {
        const filtered = transactions.filter(transaction =>
          transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredTransactions(filtered);
      }
    };
    
    return (
      <div className="App">
        <h1>The Royal Bank of Flatrion</h1>
        <div className="transaction-form">
          <TransactionForm onSubmit={handleAddTransaction} transactions={transactions} />
        </div>
        <div className="search-bar">
          <Filter onSearch={handleSearch} />
        </div>
        <div className="transaction-table">
          <Transaction transactions={filteredTransactions} />
        </div>
      </div>
    );
  };
  

export default App;
