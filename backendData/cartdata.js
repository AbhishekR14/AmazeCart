import { products } from "./products.js";
import { orders } from "./ordersdata.js";
import { getMonthAndDate } from "../Scripts/utils/formattedDate.js";
import { costToTwoDecimals } from "../Scripts/utils/cost.js";
import { saveOrdersToLocalStorage } from "./ordersdata.js";
const today = new Date();
const tomorrow = new Date(today);
const todayPlus3 = new Date(today);
const lastDate = new Date(today);
tomorrow.setDate(today.getDate() + 1);
todayPlus3.setDate(today.getDate() + 3);
lastDate.setDate(today.getDate() + 7);
// deliveryDate: 1 = free , 2 = 150 , 3=300 
export let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
    cart = [];
}
export function saveToLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

let CartTotalPrice
let CartShippingCost
let CartTotalTax
let CartTotal
export function priceChanged(){
    CartTotalPrice = cartTotalPrice();
    CartShippingCost = cartTotalDeliveryFee();
    CartTotalTax = cartTotalTax(CartTotalPrice + CartShippingCost);
    CartTotal = CartTotalTax + CartTotalPrice + CartShippingCost;
}
priceChanged();
export function addItemToCart(id , quantity , deliveryDate = 1){
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
            quantity: quantity,
            deliveryDate: deliveryDate
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

export function cartTotalTax(totalPrice){
    return totalPrice * 0.1;
};

export function updateItemDeliveryDate(DeliveryDate , id){
    cart.forEach((cartItem) => {
        if(cartItem.id === id){
            cartItem.deliveryDate = DeliveryDate;
        }
    });
    saveToLocalStorage();
};

export function cartTotalDeliveryFee(){
    let totalPrice = 0;
    cart.forEach((cartItem) => {
        totalPrice += getDeliveryFee(cartItem.deliveryDate);
    });
    return totalPrice;
};

export function getDeliveryFee(optionPicked){
    switch(optionPicked){
        case 1 : return 0;
        case 2 : return 150;
        case 3 : return 300;
    }
};

export function FormatteDeliveryDate(optionPicked){
    switch(optionPicked){
        case 0: return getMonthAndDate(today);
        case 1 : return getMonthAndDate(lastDate);
        case 2 : return getMonthAndDate(todayPlus3);
        case 3 : return getMonthAndDate(tomorrow);
    }
};

function generateOrderId() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 32; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }
    return result;
};

export function placeOrder(){
    let cartitem = []
    cart.forEach(cartItem => {
        cartitem.push({
            id: cartItem.id,
            quantity: cartItem.quantity,
            arrivingDate: FormatteDeliveryDate(cartItem.deliveryDate)
        })
        deleteItemFromCart(cartItem.id)
    });
    orders.push({
        orderId: generateOrderId(),
        orderDate: FormatteDeliveryDate(0),
        totalCost: costToTwoDecimals(CartTotal),
        items: cartitem
    });
    console.log(orders)
    saveOrdersToLocalStorage();
};