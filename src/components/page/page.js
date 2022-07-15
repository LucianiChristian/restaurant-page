import './page.css';

export default page;

function page() {
    const content = document.getElementById('content');


    // --------- Nav Rendering --------- //
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    li1.textContent = 'HOME';
    const li2 = document.createElement('li');
    li2.textContent = 'MENU';
    const li3 = document.createElement('li');
    li3.textContent = 'ABOUT';

    content.appendChild(nav);
    nav.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    // --------- Main Rendering --------- //
    const main = document.createElement('main');
    content.appendChild(main);

    // --------- Footer Rendering --------- //
    const footer = document.createElement('footer');
    footer.textContent = 'Developed by Christian L.';

    content.appendChild(footer);
}