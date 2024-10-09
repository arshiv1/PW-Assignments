let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
];


let totalExpense = expenses.reduce((total, expense)=>{
    return total+expense.amount;
},0);

console.log(totalExpense);