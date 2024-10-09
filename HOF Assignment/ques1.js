const ordersList = [
    {name : "Laptop", price : 120000},
    {name : "Mobile", price : 7000},
    {name : "Mobile Charger", price : 1500},
    {name : "Laptop Charger", price : 10500},
]

let total = 0;
ordersList.forEach(num => {
    total+=num.price;
})

console.log("Total order amount : ", total);