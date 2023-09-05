import { products } from "./products.js";
//localStorage.clear();
export let orders = JSON.parse(localStorage.getItem('orders'));
if(!orders){
    orders = []
};
export function saveOrdersToLocalStorage(){
    localStorage.setItem('orders', JSON.stringify(orders));
};