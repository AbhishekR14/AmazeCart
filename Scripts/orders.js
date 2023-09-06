import { addItemToCart , currentItemListQuantity } from '../backendData/cartdata.js';
import { products } from "../backendData/products.js";
import { orders } from "../backendData/ordersdata.js";
import { updateTrackingHTML ,arrivingOnOrNot } from '../backendData/trackingdata.js';
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
                    ${arrivingOnOrNot(item.arrivingDate)}: ${item.arrivingDate}
                </div>
                <div class="product-quantity">
                    Quantity: ${item.quantity}
                </div>
                <a href="cart.html">
                    <button class="buy-again-button button-primary js-buy-again-button" data-id="${itemID}" data-quantity="${item.quantity}" >
                    <img class="buy-again-icon" src="Pictures/buy-again.png">
                    <span class="buy-again-message">Buy it again</span>
                    </button>
                </a>
            </div>
            <div class="product-actions">
            <a href="tracking.html">
                <button class="track-package-button button-secondary js-track-package-button" data-id="${itemID}" data-order-id="${order.orderId}">
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

document.querySelectorAll('.js-buy-again-button').forEach(buyAgain => {
    buyAgain.addEventListener('click', () => {
        const Id = buyAgain.dataset.id;
        const Quantity = buyAgain.dataset.quantity;
        addItemToCart(Id,Quantity);
    });
});

document.querySelectorAll('.js-track-package-button').forEach(trackOrder => {
    trackOrder.addEventListener('click', () => {
        const Id = trackOrder.dataset.id;
        const OrderId = trackOrder.dataset.orderId;
        updateTrackingHTML(OrderId, Id);
    });
});