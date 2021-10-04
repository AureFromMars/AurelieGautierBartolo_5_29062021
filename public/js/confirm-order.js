// Afficher le numéro de commande renvoyé par l'API (récupéré du localStorage de la page cart.html)
function confirmOrder () {
    const orderId = document.getElementById('orderId');
    const fullTotalPrice = document.getElementById('fullTotalPrice');

    let displayOrderId = JSON.parse(localStorage.getItem('orderId'));
    let displayFullTotalPrice = JSON.parse(localStorage.getItem('fullTotalPrice'));
    orderId.textContent = displayOrderId;
    fullTotalPrice.textContent = displayFullTotalPrice;
    console.log(displayOrderId);
    console.log(displayFullTotalPrice);
};
confirmOrder();