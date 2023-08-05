import { cart , setToLocalStorage , currentQuantity } from '../backendData/cart.js';
import { products } from '../backendData/products.js';
import { costToTwoDecimals } from '../Scripts/utils/cost.js';
show_hide_orders_cart();
let productsHTML ='';
products.forEach((product)=>{
    productsHTML += `
    <div class="element">
        <div class="product-img">
            <img src="${product.image}">
        </div>
        <div class="product-name limit-to-2-lines">
            ${product.name}
        </div>
        <div class="stars-rating">
            <img style="width: 100px;" src="Pictures/Ratings/rating-${product.ratings.stars * 10}.png">
            <div class="number-of-ratings">
                ${product.ratings.number}
            </div>
        </div>
        <div class="product-cost">
            ₹ ${costToTwoDecimals(product.cost)}
        </div>
        <div class="no-items-picked">
            <select class="no-items-picked-button no-items-picked-button-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
        <div class="spacer-div"></div>
        <div class="added-to-cart js-added-to-cart-${product.id}">
            <img style="height: 20px;" src="Pictures/checkmark.png">
            <div class="added-to-cart-text">
                Added to cart
            </div>
        </div>
        <div class="add-to-cart">
            <button class="add-to-cart-button js-add-to-cart-button" data-product-id="${product.id}">Add to Cart</button>
        </div>
    </div>
    `
});
//adding the products to the page
const productsGrid = document.getElementsByClassName("js-products");
productsGrid[0].innerHTML = productsHTML;
//changing the cart quantity
document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      let itemInCart;
      let totalQuantity = 0;
      cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          itemInCart = cartItem;
        }
      });
      //updating the quantity dynamically based on the number of items selected
      const quantitySelector = document.querySelector(`.no-items-picked-button-${productId}`);
      const quantity = Number(quantitySelector.value);
      if (itemInCart) {
        itemInCart.quantity += quantity;
      } else {
        cart.push({
          id: productId,
          quantity: quantity
        });
      }
      cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
      })
      setToLocalStorage();
      document.querySelector('.js-cart-value').innerHTML = totalQuantity;
      document.querySelector('.js-cart-text-dropdown').innerHTML = 'Cart ('+totalQuantity+')';
      //to make the "Added to cart " visible
      document.querySelector(`.js-added-to-cart-${productId}`).classList.replace("added-to-cart" , "added-to-cart-is-visible");
      setTimeout(function() {
        document.querySelector(`.js-added-to-cart-${productId}`).classList.replace("added-to-cart-is-visible" , "added-to-cart");
      }, 1500);
    });
});
document.querySelector('.js-cart-value').innerHTML = currentQuantity();
document.querySelector('.js-cart-text-dropdown').innerHTML = 'Cart ('+currentQuantity()+')';
