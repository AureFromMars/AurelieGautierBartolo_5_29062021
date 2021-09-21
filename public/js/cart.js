// Conception HTML de la carte du produit

function htmlCartCards(storedProductCard, datas) {

    /*<li>
        <div><img></div>
        <div>
            <div>
                <div>
                    <h3></h3>
                    <div><strong></strong><span></span></div>
                    <form>
                        <label><strong></strong></label>
                        <input>
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
    aSeeProductCardButton.href = "product.html?id=" + datas._id;// ATTENTION, le bouton reste actif, même après rechargement de la page !!! Je crois que c'est le cas de tous les boutons !
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
    strongProductQuantityCartSelect.textContent = "Quantité (max. 10) : " + datas.quantity;

    // inputProductQuantityCartSelect
    const inputProductQuantityCartSelect = document.createElement('label');
    divProductContaintOptionsContainerBis.appendChild(inputProductQuantityCartSelect);
    inputProductQuantityCartSelect.id = 'productQuantityCartSelect';
    inputProductQuantityCartSelect.name = 'productQuantityCartSelect';
    inputProductQuantityCartSelect.type = 'number';
    inputProductQuantityCartSelect.value = '1';
    inputProductQuantityCartSelect.min = '1';
    inputProductQuantityCartSelect.max = '10';

    // divProductSuppAndPriceContainer
    const divProductSuppAndPriceContainer = document.createElement('div');
    divProductContaintContainer.appendChild(divProductSuppAndPriceContainer);
    divProductSuppAndPriceContainer.className = 'd-flex justify-content-between align-items-center';

    // divProductSupp
    const divProductSupp = document.createElement('div');
    divProductSuppAndPriceContainer.appendChild(divProductSupp);

    // aProductSupp // CREATE FUNCTION #####################################################################
    const aProductSupp = document.createElement('a');
    divProductSupp.appendChild(aProductSupp);
    divProductSupp.href = '#!';
    divProductSupp.type = 'button';
    divProductSupp.className = 'card-link-secondary small text-uppercase mr-3';
    divProductSupp.textContent = " Supprimer du panier";

    // iProductSupp // HELP NE FONCTIONNE PAS ##############################################################
    const iProductSupp = document.createElement('i');
    aProductSupp.appendChild(iProductSupp);
    iProductSupp.className = 'fas fa-trash-alt mr-1';

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
    // let devidedPrice = datas.price / 100;
    strongProductPrice.textContent = datas.price + "€";

}

// Boucle de création des cartes HTML avec récup des produits de variable furnitures contenant mon tableau de produits
let productStoredinLocalStorage = JSON.parse(localStorage.getItem("productsArray"));
console.log(productStoredinLocalStorage);

for (let i = 0; i < productStoredinLocalStorage.length; i++) {
    htmlCartCards(storedProductCard, productStoredinLocalStorage[i]);
}