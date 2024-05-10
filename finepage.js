
// Function to parse URL query parameters
function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Get the total amount from the URL
const totalAmount = getUrlParameter('total');

// Display the total amount on the page
const totalAmountElement1 = document.getElementById('totalAmount1');
const totalAmountElement2 = document.getElementById('totalAmount2');
if (totalAmount) {
    totalAmountElement1.textContent = totalAmount;
    totalAmountElement2.textContent = totalAmount; // Set both elements with the total amount
} else {
    totalAmountElement1.textContent = '0000';
    totalAmountElement2.textContent = '0000';
}