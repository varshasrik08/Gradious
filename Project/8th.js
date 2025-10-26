// card.js

// When the form is submitted, redirect to thankyou page
document.getElementById("card-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const cardNumber = document.getElementById("card-number").value.trim();
  const cardName = document.getElementById("card-name").value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  // Basic Validation
  if (cardNumber.length !== 16 || isNaN(cardNumber)) {
    alert("Enter a valid 16-digit card number");
    return;
  }

  if (cardName.length < 3) {
    alert("Enter a valid cardholder name");
    return;
  }

  if (!expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
    alert("Enter expiry in MM/YY format");
    return;
  }

  if (cvv.length !== 3 || isNaN(cvv)) {
    alert("Enter a valid 3-digit CVV");
    return;
  }

  // If all good, redirect
  window.location.href = "9th.html";
});
const form = document.getElementById('card-form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting normally

  // You can add validation here if needed

  // Redirect to thank you page
  window.location.href = "9th.html";
});
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

