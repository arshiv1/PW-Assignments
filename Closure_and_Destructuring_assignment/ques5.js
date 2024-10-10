function shoppingCart(){
    let cart = [];

    function addItem(product){
        const existingProduct = cart.find(item => item.id==product.id);

        if(existingProduct){
            existingProduct.quantity+=1;
        }
        else{
            cart.push({...product, quantity : 1});
        }
    }

    function displayCart(){
        return cart;
    }

    function removeItem(id){
        let i = -1;
        cart.forEach((num, index)=>{
            if(num.id==id)i= index;
        
    });
    if (i != -1) {
        cart.splice(i, 1); 
    }
}

    return {addItem, displayCart, removeItem};
}

const cart = shoppingCart();

console.log("Cart Items : ", cart.displayCart());

const product1 = {id: 1, name: 'Product 1', price: 10};
const product2 = {id: 2, name: 'Product 2', price: 20};

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);

console.log("Cart Items : ", cart.displayCart());

cart.removeItem(2);

console.log('Cart Items : ', cart.displayCart());