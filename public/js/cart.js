const currencySymbol = " €";
const currency = document.getElementsByClassName('currency');
for ( let i = 0; i < currency.length; i++) {
    currency[i].textContent = currencySymbol;
};

// Conception HTML de la carte du produit

function htmlCartCards(storedProductCard, datas) {

    /*<li>
        <div><a><img></a></div>
        <div>
            <div>
                <div>
                    <h3></h3>
                    <div><strong></strong><span></span></div>
                    <form>
                        <label><strong></strong></label>
                        <input></input>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <a><i></i></a>
                </div>
                <p><span><strong></strong></span></p>
            </div>
        </div>
    </li>*/

    // li
    const liCard = document.createElement('li');
    storedProductCard.appendChild(liCard);
    liCard.className = 'row mb-4 d-flex justify-content-center';

    // divImgContainer
    const divCardContainer = document.createElement('div');
    liCard.appendChild(divCardContainer);
    divCardContainer.className = 'col-md-5 col-lg-3 col-xl-3';

    // aSeeProductCardButton
    const aSeeProductCardButton = document.createElement('a');
    divCardContainer.appendChild(aSeeProductCardButton);
    aSeeProductCardButton.href = "product.html?id=" + datas.id;// ATTENTION, le bouton reste actif, même après rechargement de la page !!! Je crois que c'est le cas de tous les boutons !
    aSeeProductCardButton.target = "_blank";

    // imgCard
    const imgCard = document.createElement('img');
    aSeeProductCardButton.appendChild(imgCard);
    imgCard.setAttribute('src', "img/" + datas.imageUrl);
    imgCard.setAttribute('alt', "# " + datas.name);
    imgCard.setAttribute('title', "# " + datas.name);
    imgCard.width = "300";
    imgCard.height = "200";
    imgCard.className = 'productImage img-fluid rounded';

    // divProductContaintContainer
    const divProductContaintContainer = document.createElement('div');
    liCard.appendChild(divProductContaintContainer);
    divProductContaintContainer.className = 'col-md-7 col-lg-9 col-xl-9';

    // divProductContaintOptionsContainer
    const divProductContaintOptionsContainer = document.createElement('div');
    divProductContaintContainer.appendChild(divProductContaintOptionsContainer);
    divProductContaintOptionsContainer.className = 'd-flex justify-content-between';

    // divProductContaintOptionsContainerBis
    const divProductContaintOptionsContainerBis = document.createElement('div');
    divProductContaintOptionsContainer.appendChild(divProductContaintOptionsContainerBis);

    // h3ProductName
    const h3ProductName = document.createElement('h3');
    divProductContaintOptionsContainerBis.appendChild(h3ProductName);
    h3ProductName.textContent = datas.name;
    h3ProductName.className = 'productName';

    // divSelectedOptionCart
    const divSelectedOptionCart = document.createElement('div');
    divProductContaintOptionsContainerBis.appendChild(divSelectedOptionCart);

    // strongSelectedOptionCart
    const strongSelectedOptionCart = document.createElement('strong');
    divSelectedOptionCart.appendChild(strongSelectedOptionCart);
    strongSelectedOptionCart.textContent = "Couleur : ";

    // spanSelectedOptionCart
    const spanSelectedOptionCart = document.createElement('span');
    strongSelectedOptionCart.appendChild(spanSelectedOptionCart);
    spanSelectedOptionCart.id = 'selectedOptionCart';
    spanSelectedOptionCart.textContent = datas.varnish;

    // formProductQuantityCart
    const formProductQuantityCart = document.createElement('form');
    divProductContaintOptionsContainerBis.appendChild(formProductQuantityCart);
    formProductQuantityCart.id = 'productQuantityCart';

    // labelProductQuantityCartSelect
    const labelProductQuantityCartSelect = document.createElement('label');
    divProductContaintOptionsContainerBis.appendChild(labelProductQuantityCartSelect);
    labelProductQuantityCartSelect.for = 'productQuantityCartSelect';

    // strongProductQuantityCartSelect
    const strongProductQuantityCartSelect = document.createElement('strong');
    labelProductQuantityCartSelect.appendChild(strongProductQuantityCartSelect);
    strongProductQuantityCartSelect.textContent = "Quantité (max. 10) : ";
    strongProductQuantityCartSelect.className = "me-2";

    // inputProductQuantityCartSelect
    const inputProductQuantityCartSelect = document.createElement('input');
    divProductContaintOptionsContainerBis.appendChild(inputProductQuantityCartSelect);
    inputProductQuantityCartSelect.id = 'productQuantityCartSelect';
    inputProductQuantityCartSelect.name = 'productQuantityCartSelect';
    inputProductQuantityCartSelect.type = 'number';
    inputProductQuantityCartSelect.value = datas.quantity;
    inputProductQuantityCartSelect.min = '1';
    inputProductQuantityCartSelect.max = '10';

    // divProductSuppAndPriceContainer
    const divProductSuppAndPriceContainer = document.createElement('div');
    divProductContaintContainer.appendChild(divProductSuppAndPriceContainer);
    divProductSuppAndPriceContainer.className = 'd-flex justify-content-between align-items-center m-2';

    // divChangeQuantity
    const divChangeQuantity = document.createElement('div');
    divProductSuppAndPriceContainer.appendChild(divChangeQuantity);

    // iChangeQuantity
    const iChangeQuantity = document.createElement('i');
    divChangeQuantity.appendChild(iChangeQuantity);
    iChangeQuantity.className = 'fas fa-undo-alt me-2';

    // aChangeQuantity // CREATE FUNCTION #####################################################################
    const aChangeQuantity = document.createElement('a');
    divChangeQuantity.appendChild(aChangeQuantity);
    aChangeQuantity.href = '#!';
    aChangeQuantity.type = 'button';
    aChangeQuantity.className = 'card-link-secondary small text-uppercase mr-3';
    aChangeQuantity.textContent = "Modifier la quantité";
    const functionChangeQuantity = () => {
        let productCartStored = JSON.parse(localStorage.getItem("productsArray"));

        for ( let i = 0; i < productCartStored.length; i++) {
            if ((productCartStored[i].id === datas.id) && (productCartStored[i].varnish === datas.varnish)) {
                productCartStored[i].quantity = inputProductQuantityCartSelect.value;
                if (productCartStored[i].quantity > 10) {
                    productCartStored[i].quantity = 10;
                };
                localStorage.setItem("productsArray", JSON.stringify(productCartStored));
                console.log(productCartStored[i].quantity);
                location.reload();// Recharger la page pour mettre à jour le prix
            }
        }
    };
    aChangeQuantity.onclick = functionChangeQuantity;

    // divProductSupp
    const divProductSupp = document.createElement('div');
    divProductSuppAndPriceContainer.appendChild(divProductSupp);

    // iProductSupp
    const iProductSupp = document.createElement('i');
    divProductSupp.appendChild(iProductSupp);
    iProductSupp.className = 'fas fa-trash-alt me-2';

    // aProductSupp
    const aProductSupp = document.createElement('a');
    divProductSupp.appendChild(aProductSupp);
    aProductSupp.href = '#!';
    aProductSupp.type = 'button';
    aProductSupp.className = 'card-link-secondary small text-uppercase mr-3';
    aProductSupp.textContent = "Supprimer du panier";
    const functionProductSupp = () => {
        let productCartStored = JSON.parse(localStorage.getItem("productsArray"));

        for ( let i = 0; i < productCartStored.length; i++) {
            if ((productCartStored[i].id === datas.id) && (productCartStored[i].varnish === datas.varnish)) { // Récupérer mon objet
                productCartStored.splice(i,1);//Supprimer l'élément du tableau
                localStorage.setItem("productsArray", JSON.stringify(productCartStored)); // Remettre mon tableau modifié dans le localStorage
                location.reload();// Recharger la page
            }
        }
    };
    aProductSupp.onclick = functionProductSupp;

    // pProductPrice
    const pProductPrice = document.createElement('p');
    divProductSuppAndPriceContainer.appendChild(pProductPrice);
    pProductPrice.className = 'mb-0';

    // spanProductPrice
    const spanProductPrice = document.createElement('span');
    pProductPrice.appendChild(spanProductPrice);

    //strongProductPrice
    const strongProductPrice = document.createElement('strong');
    spanProductPrice.appendChild(strongProductPrice);
    strongProductPrice.textContent = (datas.quantity*datas.price) + currencySymbol;
};

// Récupération de mon tableau pour les instruction suivantes
let productStoredinLocalStorage = JSON.parse(localStorage.getItem("productsArray"));

// Compter le nombre d'articles dans le panier et créer les cartes de produits
const numberOfProductsStored = document.getElementsByClassName('numberOfProductsStored')[0];

if ( productStoredinLocalStorage === null || productStoredinLocalStorage.length === 0 ) {// Vérifier si mon tableau est null ou vide (après suppression produit)
    numberOfProductsStored.textContent = "ne contient pas de produits";
    document.getElementById("storedProductCard").innerHTML = "<h4><strong>Retournez à la page d'accueil pour découvrir l'ensemble de nos produits</strong></h4></ br><a href=\"index.html\"><i class=\"fas fa-5x fa-arrow-circle-left\"></i></a>";
} else {
    for (let i = 0; i < productStoredinLocalStorage.length; i++) {// Boucle de création des cartes HTML avec récup des produits de variable furnitures contenant mon tableau de produits
    htmlCartCards(storedProductCard, productStoredinLocalStorage[i]);
    };
    if ( productStoredinLocalStorage.length === 1) {
    numberOfProductsStored.textContent = "(1 produit)"
    } else {
        numberOfProductsStored.textContent = "(" + productStoredinLocalStorage.length + " différents produits)";    
    };
};

/************************************** Totaux de mon panier ***********************************************/

const totalPrice = document.getElementById('totalPrice');
functionCalCulateTotalPrice = () => {
    let calculatePrice = 0;
    for (let i = 0; i < productStoredinLocalStorage.length; i++) {
        calculatePrice += Number(productStoredinLocalStorage[i].price) * Number(productStoredinLocalStorage[i].quantity);
    } return calculatePrice;
};
totalPrice.textContent = functionCalCulateTotalPrice().toFixed(2);

const totalVAT = document.getElementById('totalVAT');
totalVAT.textContent = (Number(totalPrice.textContent) * 0.2).toFixed(2);

const fullTotalPrice = document.getElementById('fullTotalPrice');
fullTotalPrice.textContent = (Number(totalPrice.textContent) + Number(totalVAT.textContent)).toFixed(2);

/************************************** Confirmation de commande ***********************************************/

// Créer un numéro de commande pour la page de confirmation de commande

const confirmOrderButton = document.getElementById('confirmOrderButton');

