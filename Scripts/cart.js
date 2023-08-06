import { products } from "../backendData/products.js";
import { cart , deleteItemFromCart , currentItemListInCart , updateItemQuantity } from "../backendData/cartdata.js";
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
                        Quantity: 
                            <span class="quantity-label js-quantity-label-${cartItem.id}">${cartItem.quantity}</span>
                            <span class="update-cart-quantity js-update-cart-quantity-${cartItem.id} hide-class" ">
                                <input type="text" class="update-quantity-text-box js-update-quantity-text-box-${cartItem.id}">
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
        }else{
            alert('Quantity must be at least 0 and less than 1000');
        }
    })
});