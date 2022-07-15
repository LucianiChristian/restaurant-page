export default about;

function about() {
    const tester = document.createElement('h1');
    tester.textContent = 'aboutPage!';

    const container = document.getElementById('content');
    container.appendChild(tester);
}