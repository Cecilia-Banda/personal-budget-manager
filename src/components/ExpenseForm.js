import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [expense, setExpense] = useState({ amount: '', description: '', category: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(expense);
    setExpense({ amount: '', description: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0', textAlign: 'center' }}>
      <h3>Add Your Lovely Expense Here 🌼</h3>
      <div>
        <label>How much? 💰</label>
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>What’s it for? 📝</label>
        <input
          type="text"
          name="description"
          value={expense.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Category (e.g., Food, Fun) 🍕🎉</label>
        <input
          type="text"
          name="category"
          value={expense.category}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" style={{ backgroundColor: '#f39c12', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px' }}>
        Add My Expense here 🌟
      </button>
    </form>
  );
};

export default ExpenseForm;

