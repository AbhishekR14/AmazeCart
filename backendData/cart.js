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
export function setToLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function deleteItemFromCart(id){
    let newCart =[];
    cart.forEach((cartItem => {
        if (cartItem.id !== id){
            newCart.push(cartItem);
        }
    }))
    cart = newCart;
    setToLocalStorage();
};

export function currentQuantity(){
    let currQaunt = 0;
    cart.forEach((cartItem) => {
        currQaunt += cartItem.quantity;
    })
    return currQaunt;
}
