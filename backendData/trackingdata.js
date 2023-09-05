import { orders } from "../backendData/ordersdata.js";
import { products } from '../backendData/products.js';

export let trackingHTML = localStorage.getItem('trackingHTML');
if(!trackingHTML){
    trackingHTML = ''
};
function saveTrackingHTMLToLocalStorage(){
    localStorage.setItem('trackingHTML', trackingHTML);
};
export function updateTrackingHTML(orderId , itemId){
    trackingHTML='';
    let selectedItem;
    let selectedOrer;
    let selectedProduct;
    orders.forEach(order => {
        if(order.orderId === orderId){
            selectedOrer = order;
            order.items.forEach(item => {
                if(item.id === itemId){
                    selectedItem = item;
                    products.forEach(product => {
                        if(product.id === itemId){
                            selectedProduct = product;
                        }
                    })
                }
            })
        }  
    });
    trackingHTML = 
    `<div class="delivery-date">
    Arriving on ${selectedItem.arrivingDate}
    </div>
    <div class="product-info">
    ${selectedProduct.name}
    </div>
    <div class="product-info">
    Quantity: ${selectedItem.quantity}
    </div>
    <img class="product-image" src="${selectedProduct.image}">
    <div class="progress-labels-container">
    <div class="progress-label">
        Preparing
    </div>
    <div class="progress-label current-status">
        Shipped
    </div>
    <div class="progress-label">
        Delivered
    </div>
    </div>
    <div class="progress-bar-container">
    <div class="progress-bar"></div>
    </div>`
    saveTrackingHTMLToLocalStorage()
};
