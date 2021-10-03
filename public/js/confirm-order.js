// Afficher le numéro de commande renvoyé par l'API (récupéré du localStorage de la page cart.html)
function confirmOrder () {
    const orderId = document.getElementById('orderId');

    let displayOrderId = JSON.parse(localStorage.getItem('orderId'));
    orderId.textContent = displayOrderId;
    console.log(displayOrderId);
};
confirmOrder();