function displayInfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
}


displayInfo.call(this, 'Alice', 'Developer');

displayInfo.apply(this, ['Bob', 'Designer']);

function greet() {
    console.log(`Hello, ${this.name}!`);
}

const person = {
    name: 'Charlie'
};


const boundGreet = greet.bind(person);

boundGreet();  