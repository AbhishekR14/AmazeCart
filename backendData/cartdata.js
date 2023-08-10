import { products } from "./products.js";

export let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
    cart = [{
    id: "dhbd55151-sub52136-wiuib845-apn-5326gdv",
    quantity: 1
},{
    id: "qpwon2103-mnbj5646-jhsfvj84-sgvfsh42",
    quantity: 1
}];
}
export function saveToLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addItemToCart(id , quantity){
    let notInCart = 1;
    cart.forEach((cartItem) => {
        if(cartItem.id === id){
            cartItem.quantity = cartItem.quantity + Number(quantity);
            notInCart = 0;
        }
    })
    //if the item is not in cart then we add it
    if(notInCart === 1){
        cart.push({
            id: id,
            quantity: quantity
        });
    }
    saveToLocalStorage();
};

export function deleteItemFromCart(id){
    let newCart =[];
    cart.forEach((cartItem => {
        if (cartItem.id !== id){
            newCart.push(cartItem);
        }
    }))
    cart = newCart;
    saveToLocalStorage();
};

export function currentItemListQuantity(){
    let currQaunt = 0;
    cart.forEach((cartItem) => {
        currQaunt += Number(cartItem.quantity);
    })
    return currQaunt;
}
export function currentItemListInCart(){
    let count = 0;
    cart.forEach((cartItem) => {
        if(cartItem.id){
            count += 1;
        }
    })
    return count;
};

export function updateItemQuantity(newQuantity , id){
    cart.forEach((cartItem) => {
        if(cartItem.id === id){
            cartItem.quantity = newQuantity;
        }
    });
    saveToLocalStorage();
};

export function cartTotalPrice(){
    let totalPrice = 0;
    cart.forEach((cartItem) => {
        let cartProducts;
        products.forEach((product) => {
            if (product.id === cartItem.id){
            cartProducts = product;
            }
        });
        totalPrice += ((cartProducts.cost * cartItem.quantity));
    });
    return totalPrice;
};

export function cartShippingCost(){
    let shippingCost = 150;
    return shippingCost;
};

export function cartTotalTax(totalPrice){
    return (totalPrice * 0.1 ).toFixed(2);
};