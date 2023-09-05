import { currentItemListQuantity } from '../backendData/cartdata.js';
import { trackingHTML } from '../backendData/trackingdata.js';
show_hide_orders_cart();

document.querySelector('.js-cart-value').innerHTML = currentItemListQuantity();
document.querySelector('.js-cart-text-dropdown').innerHTML = 'Cart ('+currentItemListQuantity()+')';

document.querySelector('.js-order-tracking').innerHTML = trackingHTML;