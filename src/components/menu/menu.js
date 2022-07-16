import pizzaImage from './pizza.gif';

export default menu;


function menu() {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardImage = document.createElement('img');
    cardImage.classList.add('card--image');
    cardImage.setAttribute('src', pizzaImage);

    const cardMenu = document.createElement('div');
    cardMenu.classList.add('card--menu');

    const cardMenuTitle = document.createElement('h2');
    cardMenuTitle.classList.add('card--menu--title');
    cardMenuTitle.textContent = 'Menu Title';

    const cardMenuDescription = document.createElement('p');
    cardMenuDescription.classList.add('card--menu--description');
    cardMenuDescription.textContent = 'Menu Description, mmm. this that this';

    const cardMenuPrice = document.createElement('p');
    cardMenuPrice.classList.add('card--menu--price');
    cardMenuPrice.textContent = '$23.00';

    const cardMenuButton = document.createElement('button');
    cardMenuButton.classList.add('card--menu--button');
    cardMenuButton.textContent = 'Add to Cart';

    const main = document.querySelector('main');

    main.appendChild(card);
    card.appendChild(cardImage);
    card.appendChild(cardMenu);
    cardMenu.appendChild(cardMenuTitle);
    cardMenu.appendChild(cardMenuDescription);
    cardMenu.appendChild(cardMenuPrice);
    cardMenu.appendChild(cardMenuButton);
}