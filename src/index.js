import page from './components/page/page.js';
import home from './components/home/home.js';
import about from './components/about/about.js';
import menu from './components/menu/menu.js';

// ---------- Default Load ----------- //
page();
home();

// ---------- Tab Switching ----------- //
const homeTab = document.querySelector('li');
homeTab.addEventListener('click', () => {
    clearMain();
    home();
});

const menuTab = document.querySelector('li + li');
menuTab.addEventListener('click', () => {
    clearMain();
    menu();
})

const aboutTab = document.querySelector('li + li + li');
aboutTab.addEventListener('click', () => {
    clearMain();
    about();
})

function clearMain() {
    const main = document.querySelector('main');
    main.innerHTML = '';
}