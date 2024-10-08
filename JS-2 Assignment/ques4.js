const person1 = {
    name : "anuj",
    age : 19
}
const person2 = {
    name : "arshiv", 
    age : 19
}

const introduce = (x)=>{
    console.log(`Hello, I'm ${x.name}, and I'm ${x.age} years old`);
}


introduce.call(this, person1); 
introduce.call(this, person2);
