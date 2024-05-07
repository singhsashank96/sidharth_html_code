function updateTotalAndButtonState() {
    let total = 0;
    let anyTicketsSelected = false;

    
    document.querySelectorAll('.ticket-header').forEach(function (header) {
        let price = parseFloat(header.querySelector('.price').textContent.replace('Rs. ', ''));
        let quantity = parseInt(header.querySelector('.number-of-tickets').value);
        total += price * quantity;

        if (quantity > 0) {
            anyTicketsSelected = true;
        }
    });

   
    document.querySelector('.final-price').textContent = 'Rs. ' + total;

  
    let checkoutButton = document.querySelector('.checkout-btn a');
    if (anyTicketsSelected) {
        checkoutButton.classList.remove('disabled');
    } else {
        checkoutButton.classList.add('disabled');
    }
}


document.querySelectorAll('.number-of-tickets').forEach(function (selectElement) {
    selectElement.addEventListener('change', updateTotalAndButtonState);
});



function capitalizeParagraph() {
    var paragraphs = document.querySelectorAll('.gold1 p, .diamond p');
    paragraphs.forEach(function(paragraph) {
        paragraph.textContent = paragraph.textContent.toUpperCase();
    });
}

capitalizeParagraph();