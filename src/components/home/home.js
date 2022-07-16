import './home.css';
import restaurantImage from './cafe.jpg';

export default home;

function home() {
    const h1 = document.createElement('h1');
    h1.textContent = 'LO-FI CAFE';

    const img = document.createElement('img');
    img.setAttribute('src', restaurantImage);
    img.classList.add('home--image');

    const hr = document.createElement('hr');

    const p = document.createElement('p');
    p.textContent = '郷け太3情だ賞都アヲラ新選高よひえだ改能ヨ正働じえよ後歳9実現ろ科供ムネ監聞ヒイキ会ろ科供ムネ監聞ヒイキ会';

    const main = document.querySelector('main');
    
    main.appendChild(h1);
    main.appendChild(img);
    main.appendChild(hr);
    main.appendChild(p);
}