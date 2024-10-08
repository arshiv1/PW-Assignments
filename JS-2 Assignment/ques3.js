const contact = new Map();

contact.set("anuj", {age : "19", email : "abc@gmail.com", location : "delhi"});
contact.set("arsh", {age : "20", email : "arsh@gmail.com", location: "fdkjdf"});



const getDetails = (contact, x)=>{
    console.log(contact.get(x));
}

getDetails(contact, 'anuj');
getDetails(contact, 'arsh')