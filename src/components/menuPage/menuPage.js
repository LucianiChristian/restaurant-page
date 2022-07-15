export default menuPage;

function menuPage() {
    const tester = document.createElement('h1');
    tester.textContent = 'menuPage!';

    const container = document.getElementById('content');
    container.appendChild(tester);
}