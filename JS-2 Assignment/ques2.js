const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a,b)=>(a-b));

console.log(ages);


//min max in array
console.log(Math.max(...ages));
console.log(Math.min(...ages));

//median age
console.log(ages[ages.length/2]);

//average
let sum = 0;
ages.forEach(num=>{sum+=num;})
console.log(sum/ages.length);

console.log(Math.max(...ages)-Math.min(...ages));

