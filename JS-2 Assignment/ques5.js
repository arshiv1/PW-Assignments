const unique = new Set([1,2,3,4,5,3,5,2]);
const numSquare = new Map();

unique.forEach(num =>{
    numSquare.set(num, num*num);
});

console.log("Unique Nums and squares");
numSquare.forEach((square, number)=>{
    console.log(`${number} : ${square}`);
})

