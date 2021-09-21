// Récupération de l'id dans l'URL
let idPage = document.location.search.substr(4);

// Récupération des propriétés de l'objet en fonction de son id
const selectObjectById = furnitures.find( myFurniture => myFurniture._id === idPage);

// Conception de la page du produit
function htmlProductPage(_selectObjectById, datas) {

    let devidedPrice = datas.price / 100;

    // Afficher l'image
    // const productImage = document.getElementById('productImage');
    const productImage = document.getElementsByClassName('productImage')[0];
    productImage.setAttribute('src', "img/" + datas.imageUrl);
    
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
    }

    // Envoyer le formulaire
    const addToCart = document.getElementById('addToCart');

    // Evenenement au click du bouton
    addToCart.addEventListener("click", (event)=>{
        event.preventDefault(); // Prévient les défauts

        // Afficher une fenêtre de confirmation de mise au panier//*****************************REVENIR PLUS TARD CAR SANS PANIER RIEN ****************************/
        // const addToCartForm = document.getElementById('addToCartForm'); // Récup de mon formulaire
        // addToCartForm.action = window.confirm("Votre produit a bien été ajouté au panier !\nCliquez sur \"OK\" et consulter votre panier pour finaliser votre commande.");

        if (window.confirm("Votre produit a bien été ajouté au panier !\nConsultez votre panier et finalisez votre commande.")) {
            window.location.href = "cart.html";
        }



        let quantity = addToCartForm.elements["quantitySelect"].value; // Récup la valeur quantity
        let optionVarnish = addToCartForm.elements["optionSelect"].value; // Récup la valeur optionVarnaish

        /************************ Créer des objets dans localStorage ************************/

        let myProductObject = {
            'quantity' : quantity,
            'varnish' : optionVarnish,
            'imageUrl' : datas.imageUrl,
            'name' : datas.name,
            'price' : devidedPrice,
            'id' : datas._id
        };
        
        // Vérifier la présence d'objets dans localStorage / Outil : live server dans Visual Studio Code
        let productStored = JSON.parse(localStorage.getItem("productsArray"));

        // Ajouter un produit au localStorage
        const addProductToLocalStorage = () => {
            productStored.push(myProductObject); //Ajouter un produit sélectionné
            localStorage.setItem("productsArray", JSON.stringify(productStored)); // Nommer et stringifier l'objet analysé pour JSON
        }

        // Vérifier si le panier est déjà existant dans le localStorage pour le récupérer
        if(productStored === null) {// Si localStorage vide
            console.log("Aucun produit dans le localStorage");
            productStored = [];//Créer un tableau
            addProductToLocalStorage();
            console.log("Produit ajouté !");
        } else { // Si localStorage avec products existant
            console.log("Un produit est présent dans le localStorage");
            
            let productDoesntExists = true;
            
            for ( let i = 0; i < productStored.length; i++) {
                if ((productStored[i].id === myProductObject.id) && (productStored[i].varnish === myProductObject.varnish)) {
                    console.log("Ce produit existe déjà");
                    productDoesntExists = false;
                    productStored[i].quantity = Number(productStored[i].quantity) + Number(myProductObject.quantity);
                    if (productStored[i].quantity > 10) {
                        productStored[i].quantity = 10
                        // FAIRE UN MESSAGE A L'UTILILISATEUR !!!!!!
                    };
                    localStorage.setItem("productsArray", JSON.stringify(productStored));
                }
            }
            if(productDoesntExists) {
                console.log("Ce produit n'existe pas encore");
                addProductToLocalStorage();
                console.log(productStored);
            };
        };
    });
};

// Afficher la page du produit
function productDisplay() {
    const productPage = document.getElementById('productPage');
    htmlProductPage(productPage, selectObjectById);
};
productDisplay();

