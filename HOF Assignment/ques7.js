let originalNumbers = [2, 5, 8, 10, 3];

originalNumbers.forEach((num, index, arr) =>{
    arr[index] = num*2;
});

console.log(originalNumbers);