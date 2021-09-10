// Conception HTML de la carte du produit
function htmlCards(productsCards, datas) {

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

                // divh4CardPrice
                const divh4CardPrice = document.createElement('div');
                divCardPriceHeart.appendChild(divh4CardPrice);
                divh4CardPrice.className = 'px-2';
        
                    // h4CardPrice
                    const h4CardPrice = document.createElement('h4');
                    divh4CardPrice.appendChild(h4CardPrice);
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
                const aSeeProductCardButton = document.createElement('div');
                divCardButtons.appendChild(aSeeProductCardButton);
                aSeeProductCardButton.className = 'btn btn-outline-primary px-3';
                aSeeProductCardButton.textContent = "Voir le produit";
                aSeeProductCardButton.setAttribute('role', 'button');

                // aAddToCartCardButton
                const aAddToCartCardButton = document.createElement('div');
                divCardButtons.appendChild(aAddToCartCardButton);
                aAddToCartCardButton.className = 'btn btn-outline-primary px-3';
                aAddToCartCardButton.textContent = "Ajouter au panier";
                aAddToCartCardButton.setAttribute('role', 'button');
}

// Instruction try... catch pour gérer les erreurs A REVOIR !!!!!!!!
try {
    // Boucle de création des cartes HTML avec récup des produits de variable furnitures contenant mon tableau de produits
    function cardsLoop() {
        const productsCards = document.getElementById('productsCards');

        for (let i = 0; i < furnitures.length; i++) {
            htmlCards(productsCards, furnitures[i]);
        }
    }
} catch (error) {
    console.error(error);
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