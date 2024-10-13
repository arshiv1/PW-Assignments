let cart = [];

function addToCart(product){

    try{
        const{name, price, quantity} = product;

        if(!name || typeof name !== 'string'){
            throw new Error("Product name is required");
        }

        if(typeof price!=='number' || price<=0){
            throw new Error("Invalid proudct price");
        }

        if(!Number.isInteger(quantity) || quantity<=0){
            throw new Error("Invalid quanity");
        }

        cart.push({name, price, quantity});
        console.log(`Product added to cart: ${name}, Price: ${price}, Quantity: ${quantity}`)
    }catch(error){
        console.error("Error adding product to cart", error.message);
    }
}

function checkout(){
    try{
        if(cart.length==0){
            throw new Error("Cart is empty. Add items before chekcout");
        }

        console.log("Proceeding to chekcout with follwing items : ");
        console.table(cart);

        cart = [];
        console.log("chekcout successful! cart is now empty");
    }catch(error){
        console.error("Error during checkout: ", error.message);
    }
}

try{
    addToCart({name : "Laptop", price : 1200, quantity : 2});
    addToCart({name : "", price : 20, quantity : 1});
    addToCart({name : "Mouse", price : -15, quantity : 3});
    addToCart({name : "Keybard", price : 200, quantity : "acb"});

    checkout();
}catch(error){
    console.error(error.message);
}q