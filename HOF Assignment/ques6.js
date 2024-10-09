let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
];

const categorizeExpense = (x)=>{
    return x.map(num => {
        if(num.amount > 100)return "High Expense";
        else return "Low Expense";
    });
};

console.log(categorizeExpense(expenses));