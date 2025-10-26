// Sample products with images (replace URLs if you have your own)
const sampleProducts = [
  { id: 1, name: "Laptop", price: 50000, img: "C:\Users\Yasaswini\OneDrive\Desktop\Gradious Prjct\pictures\laptop2.webp" },
  { id: 2, name: "Tablet", price: 15000, img: "C:\Users\Yasaswini\OneDrive\Desktop\Gradious Prjct\pictures\tab.webp" },
  { id: 3, name: "Camera", price: 2000, img: "C:\Users\Yasaswini\OneDrive\Desktop\Gradious Prjct\pictures\cam.jpg" },
  { id: 4, name: "SmartWatch", price: 2000, img: "C:\Users\Yasaswini\OneDrive\Desktop\Gradious Prjct\pictures\smartwatch1.jpg"},
];

// Get cart from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart count in header
function updateCartCount() {
  const cart = getCart();
  document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

// Render cart table
function renderCart() {
  const cart = getCart();
  const cartItemsEl = document.getElementById('cart-items');
  const cartTotalEl = document.getElementById('cart-total');

  if (cart.length === 0) {
    cartItemsEl.innerHTML = "<p class='empty'>Your cart is empty.</p>";
    cartTotalEl.textContent = "Total: ₹0";
    updateCartCount();
    return;
  }

  let html = `<table>
    <tr>
      <th>Image</th>
      <th>Product</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Subtotal</th>
      <th>Action</th>
    </tr>`;
  let total = 0;

  cart.forEach((item, index) => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    html += `
      <tr>
        <td><img src="${item.img}" alt="${item.name}"></td>
        <td>${item.name}</td>
        <td>₹${item.price}</td>
        <td>
          <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
          ${item.qty}
          <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
        </td>
        <td>₹${subtotal}</td>
        <td><button class="btn" onclick="removeItem(${index})">Remove</button></td>
      </tr>
    `;
  });

  html += `</table>`;
  cartItemsEl.innerHTML = html;
  cartTotalEl.textContent = "Total: ₹" + total;
  updateCartCount();
}

// Change quantity
function changeQty(index, amount) {
  const cart = getCart();
  cart[index].qty += amount;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart(cart);
  renderCart();
}

// Remove item
function removeItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

// Add product to cart
function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({...product, qty: 1});
  }
  saveCart(cart);
  updateCartCount();
}

// Buy button
(document.getElementById('buy-btn')).addEventListener('click', () => {
  const cart = getCart();
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  window.location.href = '7th.html';
});

// Initial render
renderCart();
updateCartCount();

    // Function to get cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Function to save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to update cart count in header
function updateCartCount() {
    const cart = getCart();
    document.getElementById('cart-count').innerText = cart.length;
}

// Example: adding a product to cart
function addToCart(product) {
    const cart = getCart();
    cart.push(product);
    saveCart(cart);
    updateCartCount();
}

// Call this when page loads
updateCartCount();

const buyBtn = document.getElementById('buy-btn');

(document.getElementById('buy-btn')).addEventListener('click', () => {
    const cartItemsEl = document.getElementById('cart-items');
    if (cartItemsEl.children.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Redirect to checkout page
    window.location.href = '7th.html';
});



    
