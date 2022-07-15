export default menu;

function menu() {
    const tester = document.createElement('h1');
    tester.textContent = 'menuPage!';

    const main = document.querySelector('main');
    main.appendChild(tester);
}