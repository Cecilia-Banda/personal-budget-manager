import './App.css'; // This should be at the top of App.js

import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);
  const budgetLimit = 100; // Set a budget limit (you can make this dynamic later)

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, expense];
      const totalSpent = updatedExpenses.reduce((acc, curr) => acc + Number(curr.amount), 0); // Calculate total spent

      // Alert if the total spent is greater than or equal to the budget limit
      if (totalSpent >= budgetLimit) {
        alert("Whoa there, big spender! You're nearing your budget limit for this category.");
      }

      return updatedExpenses;
    });
  };

  return (
    <div className="App">
      <Header />
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Welcome to Your Personal Budget Manager!🎉</h2>
      <ExpenseForm addExpense={addExpense} />
      <h2 style={{ textAlign: 'center' }}>Your Expenses List ✨</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {expenses.map((expense, index) => (
          <li key={index} style={{ background: '#ecf0f1', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
            {expense.category}: 
            <strong>
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(expense.amount)}
            </strong> 
            - {expense.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


