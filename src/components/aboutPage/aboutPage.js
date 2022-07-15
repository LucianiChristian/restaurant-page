export default aboutPage;

function aboutPage() {
    const tester = document.createElement('h1');
    tester.textContent = 'aboutPage!';

    const container = document.getElementById('content');
    container.appendChild(tester);
}