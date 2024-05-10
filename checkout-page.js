    // Get all select elements
    const ticketSelects = document.querySelectorAll('.number-of-tickets');

    // Function to calculate total price
    function calculateTotalPrice() {
       let totalPrice = 0;
       ticketSelects.forEach(select => {
          const ticketPrice = parseInt(select.parentElement.querySelector('.price').textContent.replace('Rs.', '').trim());
          const ticketQuantity = parseInt(select.value);
          totalPrice += ticketPrice * ticketQuantity;
       });
       return totalPrice;
    }

    // Function to update total price display
    function updateTotalPrice() {
       const totalPrice = calculateTotalPrice();
       document.querySelector('.final-price').textContent = 'Rs.' + totalPrice;
       // Enable or disable checkout button based on total price
       const checkoutBtn = document.getElementById('checkoutBtn');
       if (totalPrice > 0) {
          checkoutBtn.classList.remove('disabled');
          checkoutBtn.href = './finalpage.html?total=' + totalPrice;
       } else {
          checkoutBtn.classList.add('disabled');
          checkoutBtn.removeAttribute('href');
       }
    }

    // Attach change event listener to each select element
    ticketSelects.forEach(select => {
       select.addEventListener('change', updateTotalPrice);
    });

    // Initial update of total price
    updateTotalPrice();