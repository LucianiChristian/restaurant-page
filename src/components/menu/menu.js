export default menu;

function menu() {
    const tester = document.createElement('h1');
    tester.textContent = 'menuPage!';

    const container = document.getElementById('content');
    container.appendChild(tester);
}