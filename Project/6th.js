const requestOtpForm = document.getElementById('requestOtpForm');
const resetForm = document.getElementById('resetForm');
const message = document.getElementById('message');

let generatedOtp = ''; // store OTP for demo

// Step 1: Request OTP
requestOtpForm.addEventListener('submit', e=>{
  e.preventDefault();
  const identifier = document.getElementById('identifier').value.trim();
  if(!identifier){
    message.style.color='red';
    message.textContent='Enter email or phone';
    return;
  }

  // For demo, generate random 6-digit OTP
  generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
  console.log('Generated OTP:', generatedOtp); // In real app, send via email/SMS

  message.style.color='green';
  message.textContent='OTP sent! Check your email or phone.';
  requestOtpForm.style.display='none';
  resetForm.style.display='block';
});

// Step 2: Reset password
resetForm.addEventListener('submit', e=>{
  e.preventDefault();
  const otp = document.getElementById('otp').value.trim();
  const newPwd = document.getElementById('newPassword').value;
  const confirmPwd = document.getElementById('confirmPassword').value;

  if(otp !== generatedOtp){
    message.style.color='red';
    message.textContent='Invalid OTP!';
    return;
  }
  if(newPwd.length<6){
    message.style.color='red';
    message.textContent='Password must be at least 6 characters';
    return;
  }
  if(newPwd !== confirmPwd){
    message.style.color='red';
    message.textContent='Passwords do not match';
    return;
  }

  message.style.color='green';
  message.textContent='Password reset successfully!';
  resetForm.reset();
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
