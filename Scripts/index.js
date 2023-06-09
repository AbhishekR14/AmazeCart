function show_hide_orders_cart()
{
    var click = document.getElementById("list-items");
    if (click.style.display === "none") 
    {
        click.style.display = "block";
    } else 
    {
        click.style.display = "none";
    }
};
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
            ₹ ${product.cost}
        </div>
        <div class="no-items-picked">
            <select class="no-items-picked-button">
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
        <div class="add-to-cart">
            <button class="add-to-cart-button">Add to Cart</button>
        </div>
    </div>
    `
});
const productsGrid = document.getElementsByClassName("js-products");
productsGrid[0].innerHTML = productsHTML;
