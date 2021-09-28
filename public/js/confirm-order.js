
// Envoyer la saisie de recherche au serveur au clic du bouton RECHERCHER
const searchInput = document.getElementById('searchInput');
searchButton.addEventListener("click", (event)=>{
	event.preventDefault();// Prévient les défauts
	if(searchInput.value === "") {// Si la recherche est vide
	} else {
		location.reload();// Recharger la page
        window.location.href = 'index.html?search=' + searchInput.value;// Renvoyer à la page d'accueil et ajouter la saisie de recherche à l'URI
	};
});

// Afficher le numéro de commande renvoyé par l'API (récupéré du localStorage de la page cart.html)
const orderId = document.getElementById('orderId');

let displayOrderId = JSON.parse(localStorage.getItem('orderId'));
orderId.textContent = displayOrderId;
console.log(displayOrderId);

localStorage.clear();// Vider le localStorage (panier)
// Vider uniquement les produits ##########################################################

// Compter le nombre d'articles dans la panier et l'afficher dans le badge = soit zéro puisqu'on vide le panier !
let productStoredinLocalStorage = JSON.parse(localStorage.getItem("productsArray"));// Récupération de mon tableau pour les instructions suivantes
const badgeOfProductsStored = document.getElementsByClassName('badgeOfProductsStored')[0];
badgeOfProductsStored.textContent = "0";