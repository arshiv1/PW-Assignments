
let expenses = [
    {amount : 100, category : "Utilities"},
    {amount : 200, category : "Groceries"},
    {amount : 50, category : "Entertainment"},
];

let expensesWithTax = expenses.map(expense => {
    return {
        ...expense, 
        tax: expense.amount * 0.1 
    };
});

console.log(expensesWithTax);