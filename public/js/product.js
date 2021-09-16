// Récupération de l'id dans l'URL
let idPage = document.location.search.substr(4);

// Récupération des propriétés de l'objet en fonction de son id
const selectObjectById = furnitures.find( myFurniture => myFurniture._id === idPage);

// Conception de la page du produit
function htmlProductPage(_selectObjectById, datas) {

    let devidedPrice = datas.price / 100; 

    // Afficher l'image
    const productImage = document.getElementById('productImage');
    productImage.setAttribute('src', "img/" + datas.imageUrl);
    
    // Afficher le nom
    const productName = document.getElementById('productName');
    productName.textContent = datas.name;

    // Afficher le prix
    const productPrice = document.getElementById('productPrice');
    productPrice.innerHTML = devidedPrice + " €";

    // Afficher la description
    const productDescription = document.getElementById('productDescription');
    productDescription.innerHTML = datas.description;

    // Afficher des options (tableau varnish) dans un menu déroulant
    const optionSelect = document.getElementById('optionSelect'); // Récupération du label
    // Créer autant d'options que d'éléments du tableau
    for (let i = 0; i < datas.varnish.length; i++) {
        let optionCreateOption = document.createElement('option'); // Création option
        optionSelect.appendChild(optionCreateOption); // Dépendance option au parent
        optionCreateOption.textContent = datas.varnish[i]; // Affichage du texte ciblé dans mon option
    }

    // Envoyer le formulaire
    const addToCart = document.getElementById('addToCart');

    // Evenemtn au click du bouton
    addToCart.addEventListener("click", (event)=>{
        event.preventDefault(); // Prévient les défauts

        const addToCartForm = document.getElementById('addToCartForm'); // Récup de mon formulaire

        // Afficher une fenêtre de confirmation de mise au panier//*****************************REVENIR PLUS TARD CAR SANS SERVEUR ET PANIER, RIEN ****************************/
        // addToCartForm.action = window.confirm("Votre produit a bien été ajouté au panier !");// ACTION doit envoyer au panier
        // addToCartForm.submit(productOptions);

        let quantity = addToCartForm.elements["quantitySelect"].value; // Récup la valeur quantity
        let optionVarnish = addToCartForm.elements["optionSelect"].value; // Récup la valeur optionVarnaish

        // console.log("Quantité = " + quantity);
        // console.log("Varnish = " + optionVarnish);

        /************************ Créer des objets dans localStorage ************************/

        // la variable panier sera un tableau mais localstorage n'accepte que les strings // JSON

        // Créer mon objet avec les données du produits choisi
        // let myProductObject = {
        //     'quantity' : quantity,
        //     'varnish' : optionVarnish,
        //     'imageUrl' : datas.imageUrl,
        //     'name' : datas.name,
        //     'price' : devidedPrice,
        //     'id' : datas._id
        // };

        let myProductObject = {
            'quantity' : quantity,
            'varnish' : optionVarnish,
            'imageUrl' : datas.imageUrl,
            'name' : datas.name,
            'price' : devidedPrice,
            'id' : datas._id
        };
        
        // Vérifier la présence d'objets dans localStorage / Outil : live server dans Visual Studio Code
        let productStored = JSON.parse(localStorage.getItem("products"));
        console.log(productStored);

        // Vérifier si le panier est déjà existant dans le localStorage pour le récupérer
        if(productStored === null) {// Si localStorage vide
            console.log("Aucun produit dans le localStorage");
            productStored = [];
            productStored.push(myProductObject);
            localStorage.setItem("products", JSON.stringify(productStored));
            console.log(productStored);
        } else { // Si localStorage avec products existant
            console.log("Un produit est présent dans le localStorage");
            productStored.push(myProductObject);
            localStorage.setItem("products", JSON.stringify(productStored));
            console.log(productStored);
        };
    });
};

// Afficher de la page du produit
function productDisplay() {
    const productPage = document.getElementById('productPage');
    htmlProductPage(productPage, selectObjectById);
};
productDisplay();

