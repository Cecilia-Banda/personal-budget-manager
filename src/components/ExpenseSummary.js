import React from 'react';
import { Pie } from 'react-chartjs-2';

const ExpenseSummary = ({ expenses }) => {
  // Calculate total per category
  const categories = expenses.reduce((acc, expense) => {
    const category = expense.category || 'Others';
    acc[category] = (acc[category] || 0) + Number(expense.amount);
    return acc;
  }, {});

  // Prepare data for Pie chart
  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        label: 'Total Expenses per Category',
        data: Object.values(categories),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Expenses Summary</h3>
      <div id="chartContainer">
    <canvas id="budgetPieChart"></canvas>
      </div>
      <Pie data={data} />
    </div>
  );
};

export default ExpenseSummary;
