const products = [
   { id: 1, name: 'Product 1', price: 29.99, imgSrc: 'https://via.placeholder.com/150' },
   { id: 2, name: 'Product 2', price: 19.99, imgSrc: 'https://via.placeholder.com/150' },
   { id: 3, name: 'Product 3', price: 39.99, imgSrc: 'https://via.placeholder.com/150' },
   { id: 4, name: 'Product 4', price: 49.99, imgSrc: 'https://via.placeholder.com/150' },
   { id: 5, name: 'Product 5', price: 59.99, imgSrc: 'https://via.placeholder.com/150' },
   { id: 6, name: 'Product 6', price: 69.99, imgSrc: 'https://via.placeholder.com/150' },
   { id: 7, name: 'Product 7', price: 79.99, imgSrc: 'https://via.placeholder.com/150' },
   { id: 8, name: 'Product 8', price: 89.99, imgSrc: 'https://via.placeholder.com/150' },
];

let cart = [];

function renderProducts() {
   const productContainer = document.getElementById('products');
   
   products.forEach(product => {
       const productDiv = document.createElement('div');
       productDiv.classList.add('product');
       productDiv.innerHTML = `
           <img src="${product.imgSrc}" alt="${product.name}">
           <h3>${product.name}</h3>
           <p>$${product.price.toFixed(2)}</p>
           <button onclick="addToCart(${product.id})">Add to Cart</button>
       `;
       productContainer.appendChild(productDiv);
   });
}

function addToCart(productId) {
   const product = products.find(p => p.id === productId);
   
   if (product) {
       cart.push(product);
       updateCartCount();
       alert(`${product.name} added to cart!`);
   }
}

function updateCartCount() {
   document.getElementById('cart-count').innerText = cart.length;
}

document.getElementById('cart-button').onclick = function() {
   renderCart();
   document.getElementById('cart').style.display = 'block';
};

document.getElementById('close-cart').onclick = function() {
   document.getElementById('cart').style.display = 'none';
};

function renderCart() {
   const cartItemsContainer = document.getElementById('cart-items');
   cartItemsContainer.innerHTML = '';
   
   cart.forEach(item => {
       const li = document.createElement('li');
       li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
       cartItemsContainer.appendChild(li);
   });
}

// Initial rendering of products
renderProducts();
