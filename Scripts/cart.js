import { products } from "../backendData/products.js";
import { 
    cart , 
    deleteItemFromCart , 
    currentItemListInCart , 
    updateItemQuantity , 
    cartTotalPrice,
    cartTotalTax,
    updateItemDeliveryDate,
    cartTotalDeliveryFee, } from "../backendData/cartdata.js";
import { costToTwoDecimals } from "./utils/cost.js";
import { getFormattedDate } from "./utils/formattedDate.js";

let cartItemsHTML ='';
let cartItemPriceHTML = '';
const today = new Date();
const tomorrow = new Date(today);
const todayPlus3 = new Date(today);
const lastDate = new Date(today);
tomorrow.setDate(today.getDate() + 1);
todayPlus3.setDate(today.getDate() + 3);
lastDate.setDate(today.getDate() + 7);

cart.forEach((cartItem) => {
    const cartItemID = cartItem.id;
    let cartProducts;
    products.forEach((product) => {
        if (product.id === cartItemID){
            cartProducts = product
        }
    });
    cartItemsHTML += 
    `<div class="orders-list js-orders-list-${cartItem.id}">
        <div class="delivery-date js-delivery-date-${cartItem.id}">
            Delivery date: ${getFormattedDate(lastDate)}
        </div>
        <div class="order-details-grid">
            <img class="product-image" src=${cartProducts.image}>
            <div class="details-div">
                <div class="product-name">
                    ${cartProducts.name}
                </div>
                <div class="product-price">
                    ₹ ${costToTwoDecimals(cartProducts.cost)}
                </div>
                <div class="product-quantity">
                    <span>
                        Quantity: 
                            <span class="quantity-label js-quantity-label-${cartItem.id}">${cartItem.quantity}</span>
                            <span class="update-cart-quantity js-update-cart-quantity-${cartItem.id} hide-class" ">
                                <input type="text" class="update-quantity-text-box js-update-quantity-text-box-${cartItem.id}" value="${cartItem.quantity}">
                                <span class="save-updated-quantity-link link-primary" data-product-id="${cartItem.id}">
                                    Save
                                </span>
                            </span>
                    </span>
                    <span class="update-quantity-link js-update-quantity-link link-primary js-update-quantity-link-${cartItem.id}" data-product-id="${cartItem.id}">
                        Update
                    </span>
                    <span class="delete-quantity-link link-primary js-delete-quantity-link" data-product-id="${cartItem.id}">
                        Delete
                    </span>
                </div>
            </div>
            <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                <div class="delivery-option">
                    <input type="radio" class="delivery-option-input js-delivery-option-input" name="delivery-option-${cartProducts.id}" value=${Number(1)} data-id="${cartProducts.id}">
                        <div>
                            <div class="delivery-option-date">
                                ${getFormattedDate(lastDate)}
                            </div>
                            <div class="delivery-option-price">
                                FREE Shipping
                            </div>
                        </div>
                </div>
                <div class="delivery-option">
                    <input type="radio" class="delivery-option-input js-delivery-option-input" name="delivery-option-${cartProducts.id}" value=${Number(2)} data-id="${cartProducts.id}">
                        <div>
                            <div class="delivery-option-date">
                                ${getFormattedDate(todayPlus3)}
                            </div>
                            <div class="delivery-option-price">
                                ₹ 150 - Shipping
                            </div>
                        </div>
                </div>
                    <div class="delivery-option">
                        <input type="radio" class="delivery-option-input js-delivery-option-input" name="delivery-option-${cartProducts.id}" value=${Number(3)} data-id="${cartProducts.id}">
                            <div>
                                <div class="delivery-option-date">
                                    ${getFormattedDate(tomorrow)}
                                </div>
                                <div class="delivery-option-price">
                                    ₹ 300 - Shipping
                                </div>
                            </div>
                    </div>
            </div>
        </div>
    </div>
    `
});
function cartItemPrice(){    
    let CartTotalPrice = cartTotalPrice();
    let CartShippingCost = cartTotalDeliveryFee();
    let CartTotalTax = cartTotalTax(CartTotalPrice + CartShippingCost);
    let CartTotal = CartTotalTax + CartTotalPrice + CartShippingCost;
    return `
        <div class="payment-summary-title">
            Order Summary
        </div>
        <div class="payment-summary-row">
            <div>Items (${currentItemListInCart()}):</div>
            <div class="payment-summary-money">₹ ${costToTwoDecimals(CartTotalPrice)}</div>
        </div>
        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">₹ ${costToTwoDecimals(CartShippingCost)}</div>
        </div>
        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">₹ ${costToTwoDecimals(CartTotalPrice + CartShippingCost)}</div>
        </div>
        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">₹ ${costToTwoDecimals(CartTotalTax)}</div>
        </div>
        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">₹ ${costToTwoDecimals(CartTotal)}</div>
        </div>
        <button class="place-order-button button-primary">
            Place your order
        </button>
    `;
};
cartItemPriceHTML = cartItemPrice();
document.querySelector('.js-payment-details').innerHTML = cartItemPriceHTML;

document.querySelector('.js-orders-lists').innerHTML = cartItemsHTML;

document.querySelectorAll('.js-delivery-option-input').forEach((input) => {
    let deliveryDate = 1;
    const Id = input.dataset.id;
    cart.forEach((item) => {
        if(item.id === Id){
            deliveryDate = item.deliveryDate;
            let shippingDate;
            switch(item.deliveryDate){
                case 1 : shippingDate = `Delivery date: ${getFormattedDate(lastDate)}`;
                            break;
                case 2 : shippingDate = `Delivery date: ${getFormattedDate(todayPlus3)}`;
                            break;
                case 3 : shippingDate = `Delivery date: ${getFormattedDate(tomorrow)}`;
                            break;
            };
            document.querySelector(`.js-delivery-date-${Id}`).innerHTML = shippingDate;
        };
    });
    if (input.value === deliveryDate.toString()) {
        input.checked = true; 
    };
});

document.querySelectorAll('.js-delete-quantity-link').forEach((deleteLink) => {
    deleteLink.addEventListener('click',() => {
        const id = deleteLink.dataset.productId;
        deleteItemFromCart(id);
        document.querySelector(`.js-orders-list-${id}`).remove();
        document.querySelector('.js-return-to-home-link').innerHTML = currentItemListInCart()+` items`;
        cartItemPriceHTML = cartItemPrice();
        document.querySelector('.js-payment-details').innerHTML = cartItemPriceHTML;
    })
});

document.querySelector('.js-return-to-home-link').innerHTML = currentItemListInCart()+` items`;

document.querySelectorAll('.js-update-quantity-link').forEach((updateLink) => {
    updateLink.addEventListener('click', () => {
        const id = updateLink.dataset.productId;
        document.querySelector(`.js-update-cart-quantity-${id}`).classList.remove('hide-class');
        document.querySelector(`.js-update-quantity-link-${id}`).classList.add('hide-class');
        document.querySelector(`.js-quantity-label-${id}`).classList.add('hide-class');
    })
});

document.querySelectorAll('.save-updated-quantity-link').forEach((saveUpdatedQuanLink) => {
    saveUpdatedQuanLink.addEventListener('click', () => {
        const id = saveUpdatedQuanLink.dataset.productId;
        document.querySelector(`.js-update-cart-quantity-${id}`).classList.add('hide-class');
        document.querySelector(`.js-update-quantity-link-${id}`).classList.remove('hide-class');
        document.querySelector(`.js-quantity-label-${id}`).classList.remove('hide-class');
        const updatedQuantity = Number(document.querySelector(`.js-update-quantity-text-box-${id}`).value);
        if(updatedQuantity > 0 && updatedQuantity < 1000){
            updateItemQuantity(updatedQuantity , id);
            document.querySelector(`.js-quantity-label-${id}`).innerHTML = updatedQuantity;
            cartItemPriceHTML = cartItemPrice();
            document.querySelector('.js-payment-details').innerHTML = cartItemPriceHTML;
        }else{
            alert('Quantity must be at least 1 and less than 1000');
        }
    })
});

document.querySelectorAll('.js-delivery-option-input').forEach((input) => {
    input.addEventListener('change', (event) => {
        const selectedOption = Number(event.target.value);
        const Id = input.dataset.id;
        let shippingDate;
        switch(selectedOption){
            case 1 : shippingDate = `Delivery date: ${getFormattedDate(lastDate)}`;
                     break;
            case 2 : shippingDate = `Delivery date: ${getFormattedDate(todayPlus3)}`;
                     break;
            case 3 : shippingDate = `Delivery date: ${getFormattedDate(tomorrow)}`;
                     break;
        };
        document.querySelector(`.js-delivery-date-${Id}`).innerHTML = shippingDate;
        updateItemDeliveryDate(selectedOption,Id);
        cartItemPriceHTML = cartItemPrice();
        document.querySelector('.js-payment-details').innerHTML = cartItemPriceHTML;
    });
});
