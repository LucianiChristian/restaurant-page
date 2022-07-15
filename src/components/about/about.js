export default about;

function about() {
    const tester = document.createElement('h1');
    tester.textContent = 'aboutPage!';

    const main = document.querySelector('main');
    main.appendChild(tester);
}