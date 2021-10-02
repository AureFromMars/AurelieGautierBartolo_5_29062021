// Récupération de l'id dans l'URL
let idPage = document.location.search.substr(4);

// Accéder à l'API
let furnitures = [];// Déclaration de ma variable avec un tableau vide
try {
    fetch('http://localhost:3000/api/furniture/' + idPage)
        .then(response => {// Accéder à l'API
        console.log(response);
        return response.json();
        })
        .then(data => {//Accéder à mon tableau de données
        console.log(data);
        furnitures = data;
        // Afficher la page du produit
        htmlProductPage(data);
        hideLoader();
        });
} catch (e) {//Afficher une alerte d'erreur en cas de problèmes d'accès
    alert(e)
};

// Conception de la page du produit
function htmlProductPage(datas) {

    const breadcrumbProductName = document.getElementById('breadcrumbProductName');
    breadcrumbProductName.textContent = datas.name;

    let devidedPrice = datas.price / 100;

    // Afficher l'image
    const productImage = document.getElementsByClassName('productImage')[0];
    productImage.setAttribute('src', datas.imageUrl);
    productImage.setAttribute('alt', "# Image du produit " + datas.name);
    productImage.setAttribute('title', "# Image du produit " + datas.name);
    
    // Afficher le nom
    const productName = document.getElementsByClassName('productName')[0];
    productName.textContent = datas.name;

    // Afficher le prix
    const productPrice = document.getElementsByClassName('productPrice')[0];
    productPrice.innerHTML = devidedPrice + " €";

    // Afficher la description
    const productDescription = document.getElementsByClassName('productDescription')[0];
    productDescription.innerHTML = datas.description;

    // Afficher des options (tableau varnish) dans un menu déroulant
    const optionSelect = document.getElementById('optionSelect'); // Récupération du label
    // Créer autant d'options que d'éléments du tableau
    for (let i = 0; i < datas.varnish.length; i++) {
        let optionCreateOption = document.createElement('option'); // Création option
        optionSelect.appendChild(optionCreateOption); // Dépendance option au parent
        optionCreateOption.textContent = datas.varnish[i]; // Affichage du texte ciblé dans mon option
    };

    // Evenenements au click du bouton
    const addToCart = document.getElementById('addToCart');
    addToCart.addEventListener('click', (event)=>{
        event.preventDefault(); // Prévient les défauts

        let quantity = addToCartForm.elements['quantitySelect'].value; // Récup la valeur quantity
        let optionVarnish = addToCartForm.elements['optionSelect'].value; // Récup la valeur optionVarnaish

        /************************ Créer des objets dans localStorage ************************/

        let myProductObject = {
            'quantity' : quantity,
            'varnish' : optionVarnish,
            'imageUrl' : datas.imageUrl,
            'name' : datas.name,
            'price' : devidedPrice,
            'id' : datas._id
        };
        
        // Vérifier la présence d'objets dans localStorage // Outil : live server dans Visual Studio Code
        let productStored = JSON.parse(localStorage.getItem('productsArray'));

        // Ajouter un produit au localStorage
        const addProductToLocalStorage = () => {
            productStored.push(myProductObject); //Ajouter un produit sélectionné
            localStorage.setItem('productsArray', JSON.stringify(productStored)); // Nommer et stringifier l'objet analysé pour JSON
        };

        // Vérifier si le panier est déjà existant dans le localStorage pour le récupérer
        if( productStored === null ) {// Si localStorage vide
            console.log("Aucun produit dans le localStorage");
            productStored = [];//Créer un tableau
            addProductToLocalStorage();
            console.log("Produit ajouté !");
        } else { // Si localStorage avec products existant
            console.log("Un produit est présent dans le localStorage");
            
            let productDoesntExists = true;
            // Boucle recherche dans la liste des produits, le produit identitque à modifier dans localStorage
            for ( let i = 0; i < productStored.length; i++) {
                if ((productStored[i].id === myProductObject.id) && (productStored[i].varnish === myProductObject.varnish)) {
                    console.log("Ce produit existe déjà");
                    productDoesntExists = false;
                    productStored[i].quantity = Number(productStored[i].quantity) + Number(myProductObject.quantity);
                    if (productStored[i].quantity > 10) {
                        productStored[i].quantity = 10;
                        document.getElementById("quantitySelectError").innerHTML = "<span style='color: red;'>Attention, votre panier contient déjà " + productStored[i].quantity + " articles de ce produit !</span>";
                    };
                    localStorage.setItem("productsArray", JSON.stringify(productStored));
                };
            };
            if ( productDoesntExists ) {
                console.log("Ce produit n'existe pas encore");
                addProductToLocalStorage();
                console.log(productStored);
            };
        };
    });
};