function shoppingCart(){
    let cart = [];

    function addItem(item){
        cart.push(item);
        console.log(`${item} added to cart`);
    }

    function displayCart(item){
        return cart;
    }

    return {
        addItem,displayCart
    }
}

const cart = shoppingCart();

cart.addItem("Laptop");
cart.addItem("Phone");

console.log(cart.displayCart());

