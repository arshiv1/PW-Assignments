function shoppingCart(){
    let cart = [];

    function addItem(product){
        const existingProduct = cart.find(item => item.id==product.id);

        if(existingProduct)existingProduct.quantity+=1;
        else cart.push({...product, quantity: 1});
    }

    function getCartItems(item){
        return cart;
    }

    return {addItem, getCartItems};
}

const cart = shoppingCart();

console.log("Cart Items : ", cart.getCartItems());

const product1 = {id: 1, name: 'Product 1', price: 10};
const product2 = {id: 2, name: 'Product 2', price: 20};

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);

console.log("Cart Items : ", cart.getCartItems());