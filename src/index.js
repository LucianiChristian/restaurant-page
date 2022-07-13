const body = document.querySelector('body');

const nav = document.createElement('nav');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.textContent = 'Home';
const li2 = document.createElement('li');
li2.textContent = 'Menu';
const li3 = document.createElement('li');
li3.textContent = 'About';

body.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);