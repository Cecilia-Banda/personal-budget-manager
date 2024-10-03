// budgetChart.js

function createBudgetChart(data) {
    const ctx = document.getElementById('budgetPieChart').getContext('2d');
    return new Chart(ctx, {
        type: 'pie',
        data: {
            labels: data.map(item => item.category),
            datasets: [{
                data: data.map(item => item.amount),
                backgroundColor: [
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Monthly Budget Breakdown'
                }
            }
        }
    });
}

// Export the function so it can be imported in other files
export { createBudgetChart };