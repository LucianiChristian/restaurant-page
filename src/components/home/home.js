import './home.css';
import restaurantImage from './restaurantImage.jpg';

export default home;

function home() {
    const content = document.getElementById('content');
    const main = document.querySelector('main');

    // --------- Home Rendering --------- //
    const h1 = document.createElement('h1');
    h1.textContent = 'LA PANADERIA';
    const img = document.createElement('img');
    img.setAttribute('src', restaurantImage);
    const hr = document.createElement('hr');
    const p = document.createElement('p');
    p.textContent = 'El placer de comer con las manos. Bien tierruo!';
    const button = document.createElement('button');
    button.textContent = 'VER EL MENU';

    // content.appendChild(main);
    main.appendChild(h1);
    main.appendChild(img);
    main.appendChild(hr);
    main.appendChild(p);
    main.appendChild(button);  
}