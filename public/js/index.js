// Accéder à l'API
let furnitures = [];// Déclaration de ma variable avec un tableau vide

// Fermer le loader quand l'API a répondu
const hideLoader = () => {
	const loader = document.getElementById('loader');
	loader.className = 'd-none';
};

// Vérifier la présence d'une recherche dans mon URI
let searchURI = document.location.search.substr(8); // filter l'URI sans "?search="
function filterFunction (arr, searchURI) {// Fonction qui appelle le tableau et la fonction de filtre précédente
	return arr.filter(function (eachProduct) {// Retourner le tableau filtré par une fonction locale
		return eachProduct.name.toLowerCase().indexOf(searchURI.toLowerCase()) !== -1; // Compare le nom de eachProduct avec searchURI // indexOf avec toLowerCase pour éviter d'être case sensitive
	});
};

// Contacter l'API
try {// Possibilité de ne faire qu'un seul then
  	fetch('http://localhost:3000/api/furniture')
		.then(response => {// Accéder à l'API
			console.log(response);
			return response.json();	
		})
		.then(data => {//Accéder à mon tableau de données
			if (searchURI) {// Si l'URL comporte une saisie récupérée de la barre de recherche
				console.log(searchURI);
				furnitures = filterFunction(data, searchURI);
			} else {
				console.log(data);
				furnitures = data;
			};
			cardsLoop(); // créer les cartes de produits en fonction de la saisie de recherche ou non
			hideLoader(); // Cacher le loader lorsque les cartes de produits sont créées
		})
} catch (e) {//Afficher une alerte d'erreur en cas de problèmes d'accès
  	alert(e)
};

// Envoyer la saisie de recherche à la soumission du formulaire (et non au clic du bouton !!!) ################################ à dupliquer
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', (event)=>{
	event.preventDefault();// Prévient les défauts
	if(searchInput.value === "") {// Si la recherche est vide
	} else {
		window.location.search = '?search=' + searchInput.value;// Ajouter la saisie de recherche à l'URI
	};
});

// Compter le nombre d'articles dans la panier et l'afficher dans le badge
let productStoredinLocalStorage = JSON.parse(localStorage.getItem("productsArray"));// Récupération de mon tableau pour les instructions suivantes
const badgeOfProductsStored = document.getElementsByClassName('badgeOfProductsStored')[0];

if ( productStoredinLocalStorage === null || productStoredinLocalStorage.length === 0 ) {// Si mon tableau localStorage est null ou vide (après suppression produit)
    badgeOfProductsStored.textContent = "0";
} else { // Si mon tableau localStorage contient des produits
    badgeOfProductsStored.textContent = productStoredinLocalStorage.length;
};

// Conception HTML de la carte du produit // A REFACTORISER en mettant l'HTML en dur directement après le li
function htmlCards(productsCards, datas) {
    // li
    const liCard = document.createElement('li');
    productsCards.appendChild(liCard);
    liCard.className = 'card';

    // divCardContainer
    const divCardContainer = document.createElement('div');
    liCard.appendChild(divCardContainer);
    divCardContainer.className = 'inner-card d-flex text-align-center align-items-center flex-column';

    // aSeeProductImgLink
    const aSeeProductImgLink = document.createElement('a');
    divCardContainer.appendChild(aSeeProductImgLink);
    aSeeProductImgLink.href = "product.html?id=" + datas._id;// ATTENTION, le bouton reste actif, même après rechargement de la page !!! Je crois que c'est le cas de tous les boutons !
    aSeeProductImgLink.target = "_blank";
	divCardContainer.className = '';

    // imgCard
    const imgCard = document.createElement('img');
    aSeeProductImgLink.appendChild(imgCard);
    imgCard.setAttribute('src', datas.imageUrl);
    imgCard.setAttribute('alt', "# " + datas.name);
    imgCard.setAttribute('title', "# " + datas.name);
    imgCard.width = "300";
    imgCard.height = "200";
    imgCard.className = 'img-fluid rounded';

    // h3CardName
    const h3CardName = document.createElement('h3');
    divCardContainer.appendChild(h3CardName);
    h3CardName.textContent = datas.name;
    h3CardName.className = 'mt-3 px-2';

    // h4CardPrice
    const h4CardPrice = document.createElement('h4');
    divCardContainer.appendChild(h4CardPrice);
    h4CardPrice.innerHTML = datas.price / 100 + " €";

    // divCardButtons
    const divCardButtons = document.createElement('div');
    divCardContainer.appendChild(divCardButtons);
    divCardButtons.className = 'px-2 mt-3';

    // aSeeProductCardButton
    const aSeeProductCardButton = document.createElement('a');
    divCardButtons.appendChild(aSeeProductCardButton);
    aSeeProductCardButton.className = 'btn btn-outline-primary px-3';
    aSeeProductCardButton.textContent = "Voir le produit";
    aSeeProductCardButton.setAttribute('role', 'button');
    aSeeProductCardButton.href = 'product.html?id=' + datas._id;
    aSeeProductCardButton.target = '_blank';
};

// Boucle de création des cartes HTML avec récup des produits de variable furnitures contenant mon tableau de produits
function cardsLoop() {
    const productsCards = document.getElementById('productsCards');
    for (let i = 0; i < furnitures.length; i++) {
        htmlCards(productsCards, furnitures[i]);
    };
};