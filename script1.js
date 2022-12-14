let carts = document.querySelectorAll('.add-cart');

let products =[
    {
        name: 'black nigger',
        tag: "black nigger",
        price: "25",
        incart: "5"
    }
];
for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumber() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers'), productNumbers + 1;
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else{
    localStorage.setItem('cartNumbers', 1)
    document.querySelector('.cart span').textContent = 1;
    }

    setItems(product)
}

function setItem(product) {
    let cartItems = localStorage.getItem('productToCartm');
    cartItem = JSON.parse(cartItems);

    if(cartItems != null){

      if(cartItems[product.tag] == uncefired) {
            cartItems = {
            ...cartItems,
            [product.tag]: product
        }
    }
    cartItems[product.tag].incart += 1;
    } else {
      product.incart = 1;
      cartItems = {
          [product.tag]: product
        }
    }
    
    localStorage.setItem('productsToCart', JSON.stringify(cartItem));
}

function totalCost(product) {
    let cartCost = parseInt(cartCost);

    if(cartCost != null){
      localStorage.setItem('totalCost', cartCost +
      product.price);
    } else {
        localStorage.setItem('totalCost', product.price);     
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
   
    if( cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product>
                 <ion-icon name="close-circle"><ion-icon>
                 <img src="./images/${item.tag}.jpg">
                 <span>${item.name}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quantity">
                <ion-icon class="decrease"
                name="arrow-dropleft-circle"></ion-icon>
                <span>${item.incart}</span>
                <ion-icon class="increase"
                name="arrow drop-right circle"></ion-icon>
            </div>
            <div class="total">
                $${item.incart > item.price},00
            </div>            
        `;
    }); 

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Basket Total
            <h4>
            <h4 class="basketTotal">
                $${cartCost},00
            <h4>
        `;
    }
}

onLoadCartNumber(); 
displayCart();