    const cart = [];
    const cartItemsEl = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const cartCountEl = document.getElementById('cart-count');

    function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
}
// Save cart to localStorage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Update header cart count
function updateCartCount() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountEl.textContent = totalQty;
}

// Add product to cart
function addToCart(product) {
    const existing = cart.find(item => item.name === product.name);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    saveCart();
    updateCartCount();
    alert(`${product.name} added to cart!`);
}
// Update on page load
updateCartCount();


    function updateCart() {
      // Clear list
      cartItemsEl.innerHTML = '';
      let total = 0;

      cart.forEach(item => {
        total += item.price * item.qty;
        const li = document.createElement('li');
        li.innerHTML = `${item.name} (x${item.qty}) <span>₹${item.price * item.qty}</span>`;
        cartItemsEl.appendChild(li);
      });

      cartTotalEl.textContent = total;
      cartCountEl.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'));

        // Check if already in cart
        const existing = cart.find(item => item.name === name);
        if (existing) {
          existing.qty += 1;
        } else {
          cart.push({ name, price, qty: 1 });
        }

        updateCart();
        alert(`${name} added to cart!`);
      });
    });
    function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update header cart count
function updateCartCount() {
    const cart = getCart();
    document.getElementById('cart-count').innerText = cart.length;
}

// Add product to cart (no duplicates)
function addToCart(product) {
    let cart = getCart();

    // Check if product already exists
    const exists = cart.some(item => item.name === product.name);

    if (exists) {
        alert(`${product.name} is already in the cart!`);
        return;
    }

    // Add new product
    cart.push(product);
    saveCart(cart);
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

// Attach event listeners to buttons
const buttons = document.querySelectorAll('.add-to-cart');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const name = btn.dataset.name;
        const price = parseInt(btn.dataset.price);
        addToCart({ name, price });
    });
});

// Initialize cart count on page load
updateCartCount();

