let originalNumbers = [2, 5, 8, 10, 3];

let evenNums = [];
originalNumbers.forEach((num) =>{
    if(num%2==0)evenNums.push(num);
});

console.log(evenNums);