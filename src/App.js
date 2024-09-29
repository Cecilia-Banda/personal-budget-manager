import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);
  const budgetLimit = 100; // Set a budget limit (you can make this dynamic later)

  // Calculate total spent based on the current expenses
  const totalSpent = expenses.reduce((acc, curr) => acc + Number(curr.amount), 0);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, expense];
      
      // Alert if the total spent is greater than or equal to the budget limit
      if (totalSpent + Number(expense.amount) >= budgetLimit) {
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

      {/* Display total expenses */}
      <h3 style={{ textAlign: 'center' }}>
        Total Expenses: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalSpent)}
      </h3>

      <h2 style={{ textAlign: 'center' }}>Your Expenses List ✨</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {expenses.map((expense, index) => (
          <li key={index} style={{ background: '#ecf0f1', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
            {expense.category}: 
            <strong>
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(expense.amount)}
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'ZMW' }).format(expense.amount)}
            </strong> 
            - {expense.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
