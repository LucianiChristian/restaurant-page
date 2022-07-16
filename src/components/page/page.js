import './page.css';
import gitHubLogo from './Octocat.png';

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

    const footerP = document.createElement('p');
    footerP.textContent = 'Developed by Christian L.';

    const footerLink = document.createElement('a');
    footerLink.setAttribute('href', 'https://github.com/LucianiChristian');

    const linkImage = document.createElement('img');
    linkImage.setAttribute('src', gitHubLogo);
    linkImage.classList.add('gitLogo');

    content.appendChild(footer);
    footer.appendChild(footerP);
    footer.appendChild(footerLink);
    footerLink.appendChild(linkImage);
}