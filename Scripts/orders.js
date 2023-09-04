import { currentItemListQuantity } from '../backendData/cartdata.js';
import { products } from "../backendData/products.js";
import { orders } from "../backendData/ordersdata.js";
show_hide_orders_cart();

document.querySelector('.js-cart-value').innerHTML = currentItemListQuantity();
document.querySelector('.js-cart-text-dropdown').innerHTML = 'Cart ('+currentItemListQuantity()+')';

let ordersHTML = '';
orders.forEach(order => {
    ordersHTML += 
        `<div class="orders-container-header">
            <div class="orders-container-left">
                <div class="order-date">
                    <div class="order-header-title">
                        Order Placed:
                    </div>
                    <div class="order-header-info">
                        ${order.orderDate}
                    </div>
                </div>
                <div class="order-cost">
                    <div class="order-header-title">
                        Total:
                    </div>
                    <div class="order-header-info">
                        ₹ ${order.totalCost}
                    </div>
                </div>
            </div>
            <div class="order-id">
                <div class="order-header-title">
                    Order ID:
                </div>
                <div class="order-header-info">
                    ${order.orderId}
                </div>
            </div>
        </div>`;
    order.items.forEach(item => {
        const itemID = item.id;
        let cartProducts;
        products.forEach((product) => {
            if (product.id === itemID){
                cartProducts = product
            }
        });
        ordersHTML += 
        `<div class="order-details-grid">
            <div class="product-image-container">
                <img src=${cartProducts.image}>
            </div>
            <div class="product-details">
                <div class="product-name">
                    ${cartProducts.name}
                </div>
                <div class="product-delivery-date">
                    Arriving on: ${item.arrivingDate}
                </div>
                <div class="product-quantity">
                    Quantity: ${item.quantity}
                </div>
                <button class="buy-again-button button-primary">
                <img class="buy-again-icon" src="Pictures/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
                </button>
            </div>
            <div class="product-actions">
                <a href="tracking.html">
                <button class="track-package-button button-secondary">
                    Track package
                </button>
                </a>
            </div>
        </div>`;
    });
});

document.querySelector('.js-orders-container').innerHTML = ordersHTML;

if(orders.length === 0){
    document.querySelector('.js-orders-container').innerHTML = `You have placed no orders 
    <br>
    <a href="index.html">
        <button class="back-to-home-button button-primary">
            Go back home
        </button>
    </a>`;
}