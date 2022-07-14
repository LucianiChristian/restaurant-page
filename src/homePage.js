import './homePage.css';
export default homePage;

function homePage() {
    const content = document.getElementById('content');


    // --------- Nav Rendering --------- //
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    li1.textContent = 'Home';
    const li2 = document.createElement('li');
    li2.textContent = 'Menu';
    const li3 = document.createElement('li');
    li3.textContent = 'About';

    content.appendChild(nav);
    nav.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    // --------- Main Rendering --------- //
    const main = document.createElement('main');
    const h3 = document.createElement('h3');
    h3.textContent = 'LA PANADERIA';
    const img = document.createElement('img');
    img.setAttribute('src', '../src/restaurantImage.jpg');
    const hr = document.createElement('hr');
    const p = document.createElement('p');
    p.textContent = 'El placer de comer con las manos. Bien tierruo!';
    const button = document.createElement('button');
    button.textContent = 'VER EL MENU';

    content.appendChild(main);
    main.appendChild(h3);
    main.appendChild(img);
    main.appendChild(hr);
    main.appendChild(p);
    main.appendChild(button);

    // --------- Footer Rendering --------- //
    const footer = document.createElement('footer');
    footer.textContent = 'Developed by Christian L.';

    content.appendChild(footer);
}