import './page.css';
import gitHubLogo from './Octocat.png';
import music from './chop.mp3';

export default page;

function page() {
    const content = document.getElementById('content');

    // <audio controls src="/music/Kool And The Gang CHOP.mp3" controls autoplay></audio>
    
    // --------- Nav Rendering --------- //
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    li1.textContent = 'HOME';
    const li2 = document.createElement('li');
    li2.textContent = 'MENU';
    const li3 = document.createElement('li');
    li3.textContent = 'ABOUT';

    const audio = new Audio(music);
    audio.setAttribute('loop', true)
    audio.setAttribute('autoplay', true);

    content.appendChild(nav);
    nav.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    nav.appendChild(audio);

    // --------- Main Rendering --------- //
    const main = document.createElement('main');
    content.appendChild(main);

    // --------- Footer Rendering --------- //
    const footer = document.createElement('footer');

    const footerP = document.createElement('p');
    footerP.textContent = 'Developed + Chopped by Christian L.';

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