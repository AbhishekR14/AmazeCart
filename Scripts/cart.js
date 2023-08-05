import { products } from "../backendData/products.js";
import { cart , deleteItemFromCart , currentItemListInCart } from "../backendData/cart.js";
import { costToTwoDecimals } from "./utils/cost.js";
let cartItemsHTML ='';

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
        <div class="delivery-date">
            Delivery date: Tuesday, June 21
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
                        Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
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
                    <input type="radio" checked="" class="delivery-option-input" name="delivery-option-${cartProducts.id}">
                        <div>
                            <div class="delivery-option-date">
                                Tuesday, June 21
                            </div>
                            <div class="delivery-option-price">
                                FREE Shipping
                            </div>
                        </div>
                </div>
                <div class="delivery-option">
                    <input type="radio" class="delivery-option-input" name="delivery-option-${cartProducts.id}">
                        <div>
                            <div class="delivery-option-date">
                                Wednesday, June 15
                            </div>
                            <div class="delivery-option-price">
                                ₹ 150 - Shipping
                            </div>
                        </div>
                </div>
                    <div class="delivery-option">
                        <input type="radio" class="delivery-option-input" name="delivery-option-${cartProducts.id}">
                            <div>
                                <div class="delivery-option-date">
                                    Monday, June 13
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

document.querySelector('.js-orders-lists').innerHTML = cartItemsHTML;

document.querySelectorAll('.js-delete-quantity-link').forEach((deleteLink) => {
    deleteLink.addEventListener('click',() => {
        const id = deleteLink.dataset.productId;
        deleteItemFromCart(id);
        document.querySelector(`.js-orders-list-${id}`).remove();
        document.querySelector('.js-return-to-home-link').innerHTML = currentItemListInCart()+` items`;
    })
});

document.querySelector('.js-return-to-home-link').innerHTML = currentItemListInCart()+` items`;