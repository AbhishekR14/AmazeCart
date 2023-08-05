export let cart = [{
    id: "dhbd55151-sub52136-wiuib845-apn-5326gdv",
    quantity: 2
},{
    id: "qpwon2103-mnbj5646-jhsfvj84-sgvfsh42",
    quantity: 2
}];

export function deleteItemFromCart(id){
    let newCart =[];
    cart.forEach((cartItem => {
        if (cartItem.id !== id){
            newCart.push(cartItem);
        }
    }))
    cart = newCart;
};