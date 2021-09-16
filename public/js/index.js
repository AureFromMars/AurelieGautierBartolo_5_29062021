// Conception HTML de la carte du produit // A REFACTORISER SI LE TEMPS LE PERMET *****************************
function htmlCards(productsCards, datas) {
    /* <li>
        <div>
            <img></img>
            <h3></h3>
            <div>
                <div><h4></h4></div>
                <span><i></i></span>
            </div>
            <div><a></a></div>
        </div>
    </li> */

    // li
    const liCard = document.createElement('li');
    productsCards.appendChild(liCard);
    liCard.className = 'card';

    // divCardContainer
    const divCardContainer = document.createElement('div');
    liCard.appendChild(divCardContainer);
    divCardContainer.className = 'inner-card';

    // imgCard
    const imgCard = document.createElement('img');
    divCardContainer.appendChild(imgCard);
    imgCard.setAttribute('src', "img/" + datas.imageUrl);
    imgCard.setAttribute('alt', "# " + datas.name);
    imgCard.setAttribute('title', "# " + datas.name);
    imgCard.width = "300";
    imgCard.height = "200";
    imgCard.className = 'img-fluid rounded';

    // h3CardName
    const h3CardName = document.createElement('h3');
    divCardContainer.appendChild(h3CardName);
    h3CardName.textContent = datas.name;
    h3CardName.className = 'd-flex justify-content-center align-items-center mt-3 px-2';

    // divCardPriceHeart
    const divCardPriceHeart = document.createElement('div');
    divCardContainer.appendChild(divCardPriceHeart);
    divCardPriceHeart.className = 'd-flex justify-content-between align-items-center mt-3 px-2';

    // divH4CardPrice
    const divH4CardPrice = document.createElement('div');
    divCardPriceHeart.appendChild(divH4CardPrice);
    divH4CardPrice.className = 'px-2';

    // h4CardPrice
    const h4CardPrice = document.createElement('h4');
    divH4CardPrice.appendChild(h4CardPrice);
    h4CardPrice.innerHTML = datas.price / 100 + " €";

    // spanCardHeart
    const spanCardHeart = document.createElement('span');
    divCardPriceHeart.appendChild(spanCardHeart);
    spanCardHeart.className = 'heart';

    // iconCardHeart
    const iconCardHeart = document.createElement('i');
    spanCardHeart.appendChild(iconCardHeart);
    iconCardHeart.className = 'fa fa-heart';

    // divCardButtons
    const divCardButtons = document.createElement('div');
    divCardContainer.appendChild(divCardButtons);
    divCardButtons.className = 'px-2 mt-3 d-flex justify-content-between';

    // aSeeProductCardButton
    const aSeeProductCardButton = document.createElement('a');
    divCardButtons.appendChild(aSeeProductCardButton);
    aSeeProductCardButton.className = 'btn btn-outline-primary px-3';
    aSeeProductCardButton.textContent = "Voir le produit";
    aSeeProductCardButton.setAttribute('role', 'button');
    aSeeProductCardButton.href = "product.html?id=" + datas._id;// ATTENTION, le bouton reste actif, même après rechargement de la page !!! Je crois que c'est le cas de tous les boutons !
    aSeeProductCardButton.target = "_blank";
}

// Boucle de création des cartes HTML avec récup des produits de variable furnitures contenant mon tableau de produits
function cardsLoop() {
    const productsCards = document.getElementById('productsCards');

    for (let i = 0; i < furnitures.length; i++) {
        htmlCards(productsCards, furnitures[i]);
    }
}
cardsLoop();

// Création des produits.. à utiliser pour l'API

// class product {
//     constructor(argVarnish, id, name, price, description, imageUrl) {
//         this.varnish = argVarnish;
//         this.id = id;
//         this.name = name;
//         this.description = description;
//         this.price = price / 100 + "€";
//         this.imageUrl = imageUrl;
//     }
// }

// récup des données // OK
// création du panier --> localStorage
// insertion du produit dans le panier
// sauvegarde du panier dans localstorage
// IDEM index et product.html
// ensuite cart.html
// API
// confirmation à la fin pour créer une numéro de commande