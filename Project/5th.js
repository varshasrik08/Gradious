document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const pass = document.getElementById("password").value;
    const cpass = document.getElementById("confirmPassword").value;

    if (pass !== cpass) {
        alert("Passwords do not match!");
        return;
    }

    // Save user in localStorage (Optional)
    const user = { name, email, mobile, pass };
    localStorage.setItem("myshopUser", JSON.stringify(user));

    alert("Account created successfully!");
    window.location.href = "4th.html"; // redirect to login page
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
