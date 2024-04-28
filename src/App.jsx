import React, { useState } from 'react';
import Transaction from './components/Transaction';
import TransactionForm from './components/TransactionForm';
import './App.css'
const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>The Royal Bank of Flatrion</h1>
      <TransactionForm onSubmit={handleAddTransaction} />
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Transaction/>
    </div>
  );
}

export default App;
