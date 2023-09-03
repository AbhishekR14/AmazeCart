import { addItemToCart , currentItemListQuantity } from '../backendData/cartdata.js';
import { products } from '../backendData/products.js';
import { costToTwoDecimals } from '../Scripts/utils/cost.js';
show_hide_orders_cart();
//adding the products to the page
const productsGrid = document.getElementsByClassName("js-products");
productsGrid[0].innerHTML = renderProducts();
//changing the cart quantity
document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      //updating the quantity dynamically based on the number of items selected
      const quantitySelector = document.querySelector(`.no-items-picked-button-${productId}`);
      const quantity = Number(quantitySelector.value);
      //adding item to cart
      addItemToCart(productId,quantity);
      document.querySelector('.js-cart-value').innerHTML = currentItemListQuantity();
      document.querySelector('.js-cart-text-dropdown').innerHTML = 'Cart ('+currentItemListQuantity()+')';
      //to make the "Added to cart " visible
      document.querySelector(`.js-added-to-cart-${productId}`).classList.replace("added-to-cart" , "added-to-cart-is-visible");
      setTimeout(function() {
        document.querySelector(`.js-added-to-cart-${productId}`).classList.replace("added-to-cart-is-visible" , "added-to-cart");
      }, 1500);
    });
});
document.querySelector('.js-cart-value').innerHTML = currentItemListQuantity();
document.querySelector('.js-cart-text-dropdown').innerHTML = 'Cart ('+currentItemListQuantity()+')';

document.querySelector('.js-search-bar-button').addEventListener('click', () => {
    const searchedText = document.querySelector('.js-search-bar').value;
    const productsGrid = document.getElementsByClassName("js-products");
    productsGrid[0].innerHTML = renderSearchedProducts(searchedText);
    document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
        button.addEventListener('click', () => {
          const productId = button.dataset.productId;
          //updating the quantity dynamically based on the number of items selected
          const quantitySelector = document.querySelector(`.no-items-picked-button-${productId}`);
          const quantity = Number(quantitySelector.value);
          //adding item to cart
          addItemToCart(productId,quantity);
          document.querySelector('.js-cart-value').innerHTML = currentItemListQuantity();
          document.querySelector('.js-cart-text-dropdown').innerHTML = 'Cart ('+currentItemListQuantity()+')';
          //to make the "Added to cart " visible
          document.querySelector(`.js-added-to-cart-${productId}`).classList.replace("added-to-cart" , "added-to-cart-is-visible");
          setTimeout(function() {
            document.querySelector(`.js-added-to-cart-${productId}`).classList.replace("added-to-cart-is-visible" , "added-to-cart");
          }, 1500);
        });
    });
    document.querySelector('.js-cart-value').innerHTML = currentItemListQuantity();
    document.querySelector('.js-cart-text-dropdown').innerHTML = 'Cart ('+currentItemListQuantity()+')'; 
});

function renderProducts() {
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
    return productsHTML
};

function renderSearchedProducts(searchedText) {
    if(searchedText === ""){
        return renderProducts()
    }
    else{
        let productsHTML ='';
        products.forEach((product)=>{
            let name = product.name.toLowerCase();
            let Keywords = product.keywords.find((element) => element.toLowerCase() === searchedText.toLowerCase());
            if(name.includes(searchedText.toLowerCase()) || Keywords === searchedText.toLowerCase() ? true : false) {
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
            };
        });
        if (productsHTML == ''){
            return ("No products matched your search.")
        }else{
            return productsHTML
        }
    };
};