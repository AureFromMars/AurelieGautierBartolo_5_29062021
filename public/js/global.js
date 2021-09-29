// Fermer le loader quand l'API a répondu
const hideLoader = () => {
	const loader = document.getElementById('loader');
	loader.className = 'd-none';
};

// Envoyer la saisie de RECHERCHE à la soumission du formulaire (et non au clic du bouton !!!) ################################ à dupliquer
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', (event)=>{
	event.preventDefault();// Prévient les défauts
	if(searchInput.value === "") {// Si la recherche est vide
	} else {
		window.location.replace('index.html?search=' + searchInput.value);// Renvoyer à la page d'accueil et ajouter la saisie de recherche à l'URI
	};
});

// Récupérer mon tableau de produits dans le localStorage
let productStoredinLocalStorage = JSON.parse(localStorage.getItem('productsArray'));// Récupération de mon tableau pour les instructions suivantes

// Compter le nombre d'articles dans la panier et l'afficher dans le badge
const badgeOfProductsStored = document.getElementsByClassName('badgeOfProductsStored')[0];

if ( productStoredinLocalStorage === null || productStoredinLocalStorage.length === 0 ) {// Si mon tableau localStorage est null ou vide (après suppression produit)
    badgeOfProductsStored.textContent = "0";
} else { // Si mon tableau localStorage contient des produits
    badgeOfProductsStored.textContent = productStoredinLocalStorage.length;
};