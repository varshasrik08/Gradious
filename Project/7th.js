const payBtn = document.getElementById('pay-btn');

payBtn.addEventListener('click', () => {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    if (!selectedPayment) {
        alert('Please select a payment method!');
        return;
    }

    alert(`Payment method selected: ${selectedPayment.value}\nThank you for your purchase!`);
    // Optional: Redirect to a “Thank You” page
    window.location.href = 'thankyou.html';
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
    document.getElementById("pay-btn").addEventListener("click", () => {
  const payment = document.querySelector('input[name="payment"]:checked');

  if (!payment) {
    alert("Please select a payment method.");
    return;
  }

  const selected = payment.value;

  if (selected === "Cash on Delivery") {
    window.location.href = "9th.html";
  } else {
    // Go to card details page
    window.location.href = "8th.html";
  }
});
const codBtn = document.getElementById('cod-btn');
codBtn.addEventListener('click', function() {
  // Directly go to thank you page
  window.location.href = "9th.html";
});


