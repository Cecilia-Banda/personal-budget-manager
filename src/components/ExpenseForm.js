import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [expense, setExpense] = useState({ amount: '', description: '', category: '', date: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(expense);
    setExpense({ amount: '', description: '', category: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0', textAlign: 'center' }}>
      <h3>Add Your in-budget Expense Here 🌼</h3>
      <div>
        <label>How much is it? 💰</label>
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
        <label>Category (e.g., Food, Entertainment) 🍕🎉</label>
        <select
          name="category"
          value={expense.category}
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Housing">Housing</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Beauty">Beauty</option>
          <option value="Electronics">Electronics</option>
          <option value="Health">Health</option>
          <option value="Donate">Donate</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label>Date 📅</label>
        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" style={{ backgroundColor: '#f39c12', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px' }}>
        Add My Expense🌟
      </button>
    </form>
  );
};

export default ExpenseForm;
