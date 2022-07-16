import './menu.css';
import pizzaImage from './pizza.gif';
import riceImage from './rice.gif';
import cakeImage from './rainbowcake.gif';

export default menu;

function menu() {
    pizzaCard();
    riceCard();
    cakeCard();
}

function pizzaCard() {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardImage = document.createElement('img');
    cardImage.classList.add('card--image');
    cardImage.setAttribute('src', pizzaImage);

    const cardMenu = document.createElement('div');
    cardMenu.classList.add('card--menu');

    const cardMenuTitle = document.createElement('h2');
    cardMenuTitle.classList.add('card--menu--title');
    cardMenuTitle.textContent = 'Pizza';

    const cardMenuDescription = document.createElement('p');
    cardMenuDescription.classList.add('card--menu--description');
    cardMenuDescription.textContent = 'This is a great summertime pizza, because it is light and it can be served hot or cold.';

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

function riceCard() {
    const card = document.createElement('div');
    card.classList.add('card', 'card-reverse');

    const cardImage = document.createElement('img');
    cardImage.classList.add('card--image','card--image-reverse');
    cardImage.setAttribute('src', riceImage);

    const cardMenu = document.createElement('div');
    cardMenu.classList.add('card--menu');

    const cardMenuTitle = document.createElement('h2');
    cardMenuTitle.classList.add('card--menu--title');
    cardMenuTitle.textContent = 'Fried Rice';

    const cardMenuDescription = document.createElement('p');
    cardMenuDescription.classList.add('card--menu--description');
    cardMenuDescription.textContent = 'A stir fry with chicken, rice, soy sauce and veggies like peas, carrots, celery and bell peppers.';

    const cardMenuPrice = document.createElement('p');
    cardMenuPrice.classList.add('card--menu--price');
    cardMenuPrice.textContent = '$18.00';

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

function cakeCard() {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardImage = document.createElement('img');
    cardImage.classList.add('card--image');
    cardImage.setAttribute('src', cakeImage);

    const cardMenu = document.createElement('div');
    cardMenu.classList.add('card--menu');

    const cardMenuTitle = document.createElement('h2');
    cardMenuTitle.classList.add('card--menu--title');
    cardMenuTitle.textContent = 'Rainbow Cake';

    const cardMenuDescription = document.createElement('p');
    cardMenuDescription.classList.add('card--menu--description');
    cardMenuDescription.textContent = 'A cake that resembles a rainbow, and is topped with strawberry fluff that reminds you of cotton candy.';

    const cardMenuPrice = document.createElement('p');
    cardMenuPrice.classList.add('card--menu--price');
    cardMenuPrice.textContent = '$20.00';

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