    // Initialize cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCountEl = document.getElementById('cart-count');

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

// Attach event listeners
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price); // use parseFloat for decimals
        if (!name || isNaN(price)) {
            console.error("Invalid product data:", name, price);
            return;
        }
        addToCart({ name, price });
    });
});
// Initialize cart count on page load
updateCartCount();
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
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
