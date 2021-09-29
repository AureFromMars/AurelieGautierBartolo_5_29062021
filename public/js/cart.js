// Définir la devise et l'appliquer à chaque endroit où le prix est afficher
const currencySymbol = " €";
const currency = document.getElementsByClassName('currency');
for ( let i = 0; i < currency.length; i++) {
    currency[i].textContent = currencySymbol;
};

// Conception HTML de la carte du produit
function htmlCartCards(storedProductCard, datas) {
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
    imgCard.setAttribute('src', datas.imageUrl);
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

    // aChangeQuantity
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

// Compter le nombre d'articles dans le panier, créer les cartes de produits, les taux de la commande

const numberOfProductsStored = document.getElementById('numberOfProductsStored');

if ( productStoredinLocalStorage === null || productStoredinLocalStorage.length === 0 ) {// Si mon tableau localStorage est null ou vide (après suppression produit)
    numberOfProductsStored.textContent = "ne contient pas de produits";
    document.getElementById('cartIsEmpty').className = "row d-flex justify-content-center d-block m-5";
    hideLoader();
} else { // Si mon tableau localStorage contient des produits

    // Afficher le contenu des produits et totaux de la commande
    const totalCartContainer = document.getElementById('totalCartContainer');// Récupérer le div de contenu du panier
    totalCartContainer.className = "row d-flex justify-content-center d-block m-3";

    // Créer des cartes HTML avec récup des produits contenus dans mon tableau localStorage
    for (let i = 0; i < productStoredinLocalStorage.length; i++) {
    htmlCartCards(storedProductCard, productStoredinLocalStorage[i]);
    hideLoader();
    };
    if ( productStoredinLocalStorage.length === 1) {
    numberOfProductsStored.textContent = "(1 produit)";
    } else {
        numberOfProductsStored.textContent = "(" + productStoredinLocalStorage.length + " différents produits)";    
    };

    // Bouton vider le panier et recharger la page
    clearLocalStorage.addEventListener("click", (event)=>{
        event.preventDefault(); // Prévient les défauts
        localStorage.removeItem('productsArray');
        location.reload();
    });

    // Calculer les totaux de la commande
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

    // Valider la commande avec le bouton de confirmation et rediriger vers confirm-order.html
    const customerInformationsForm = document.getElementById('customerInformationsForm');

    customerInformationsForm.addEventListener('submit', (event)=>{
        event.preventDefault(); // Prévient les défauts

        // Transmettre les informations au serveur via API POST (1 objet avec 2 propriétés : contact et products)

        // Récupérer les valeurs du formulaire pour les champs demandés par la mission
        const firstNameFormInput = document.getElementById('firstNameFormInput');
        const lastNameFormInput = document.getElementById('lastNameFormInput');
        const addressFormInput = document.getElementById('addressFormInput');
        const cityFormInput = document.getElementById('cityFormInput');
        const emailFormInput = document.getElementById('emailFormInput');

        // Validation du formulaire

        let explainErrorMessage = "Ce formulaire est nécessaire pour valider votre commande.\nVos informations ne seront utilisées que pour nous permettre de vous livrer.\n\nMerci de corriger les éléments suivants :\n\n";
        let errorMessage = "";

        function checkFirstName() {
            if (firstNameFormInput.value === ""){
                errorMessage += "- vous n'avez pas renseigné votre Prénom.\n";
                return false;
            }
            else if (!(/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/.test(firstNameFormInput.value))) {// Mettre le regex à l'intérieur de /^ +$/
                errorMessage += "- vous avez un caractère invalide dans votre Prénom.\n";
                return false;
            };
            return true;
        }; checkFirstName();

        function checkLastName() {
            if (lastNameFormInput.value === ""){
                errorMessage += "- vous n'avez pas renseigné votre Nom.\n";
                return false;
            }
            else if (!(/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/.test(lastNameFormInput.value))) {
                errorMessage += "- vous avez un caractère invalide dans votre Nom.\n";
                return false;
            };
            return true;
        }; checkLastName();

        function checkAddress() {
            if (addressFormInput.value === ""){
                errorMessage += "- vous n'avez pas renseigné votre Adresse.\n";
                return false;
            }
            else if (!(/^[A-Za-zÀ-ÖØ-öø-ÿ0-9]+$/.test(addressFormInput.value))) {
                errorMessage += "- vous avez un caractère invalide dans votre Adresse.\n";
                return false;
            };
            return true;
        }; checkAddress();

        function checkCity() {
            if (cityFormInput.value === ""){
                errorMessage += "- vous n'avez pas renseigné votre Ville.\n";
                return false;
            }
            else if (!(/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/.test(cityFormInput.value))) {
                errorMessage += "- vous avez un caractère invalide dans votre Ville.\n";
                return false;
            };
            return true;
        }; checkCity();

        function checkEmail() {
            if (emailFormInput.value === ""){
                errorMessage += "- vous n'avez pas renseigné votre Adresse Email.\n";
                return false;
            }
            else if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailFormInput.value))) {
                errorMessage += "- le format de votre Email n'est pas valide.\n"
                return false;
            };
            return true;
        }; checkEmail();

        if (errorMessage != "") {
            alert(explainErrorMessage + errorMessage);
            return false;// Arrêter la fonction
        };

        // Définir mon objet contact à transmettre à l'API
        let contact = {
            firstName : firstNameFormInput.value,
            lastName : lastNameFormInput.value,
            address : addressFormInput.value,
            city : cityFormInput.value,
            email : emailFormInput.value,
        };

        // Envoyer mon objet contact dans le localStorage, en cas de besoin ultérieur
        const addContactToLocalStorage = () => {
            localStorage.setItem('contact', JSON.stringify(contact)); // Nommer et stringifier l'objet analysé pour JSON
        };
        addContactToLocalStorage();

        // Récupérer les id du localStorage sous forme de tableau
        let quantity = true // changer par true/false si on veut gérer ou non la quantité

        let getProductsIdTable = () => {
            let createProductIdTableFromLocalStorage = [];
            for (let i = 0; i < productStoredinLocalStorage.length; i++) {// Consulter le tableau du localStorage produit par produit
                // Récupérer autant d'id de produit que de quantité choisie :
                if (quantity) {// Si on veut gérer la quantité
                    for(let j = 0; j < productStoredinLocalStorage[i].quantity; j++) {// Itération sur la quantité
                        createProductIdTableFromLocalStorage.push( productStoredinLocalStorage[i].id );// Ajouter des lignes supplémentaires dans le tableau d'id, avant le fetch ultérieur
                    };
                } else {// Ignorer la quantité
                    createProductIdTableFromLocalStorage[i] = productStoredinLocalStorage[i].id;//Mon premier for d'origine
                };
            };
            return(createProductIdTableFromLocalStorage);
        };
        let products = getProductsIdTable();
        // Objet contenant les tableaux du formulaire et les id
        const confirmOrderDatas = {
            products,
            contact,
        };
        console.log("Objet créé avec données de commande :", confirmOrderDatas);

        // Envoyer les données de l'objet au serveur
        let functionSendOrder = async () => {
            try {
                const postToOrderApiFolder = await fetch('http://localhost:3000/api/furniture/order', {
                    method : 'POST',
                    headers :{
                        'Accept' : 'application/json',
                        'Content-type' : 'application/json'
                    },
                    body: JSON.stringify(confirmOrderDatas)
                });
                const content = await postToOrderApiFolder.json();
                console.log("Données renvoyées par l'API :", content);

                localStorage.setItem('orderId', JSON.stringify(content.orderId));

            } catch (e) {//Afficher une alerte d'erreur en cas de problèmes d'accès
                alert(e)
            };
        };
        functionSendOrder();

        // Éviter que l'évènement courant ne se propage plus loin dans les phases de capture et de déploiement
        // event.stopPropagation();// Pas utile sur le submit d'un formulaire // Utile pour l'event d'un bouton au clic car submit en plus de l'event

        // Vider le panier, mais conserver les données client et numéro de commande

        localStorage.removeItem('productsArray');

        // Rediriger vers la page de confirmation de commande
        window.location.href = 'confirm-order.html';
    });
};

/** 
PLAN DE TEST, pas TEST

excel avec les fichier et fonctions X (qui sert à quoi, résultat attendu), de la ligne Y, pour la tester quoi faire
pour tester la fonction d'affichage des produits de la page d'accueil, il faut l'appeler et vérifier que les produits s'affichent bien dans la page, causes possibles : variable furniture vide, n'existe pas, le appendchild n'existe pas si modif HTML
voir TDD

*/