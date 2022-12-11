// Write your code here!
const main = document.getElementById('main');
main.remove()

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');

const name = "Hani"

newHeader.textContent = `${name} is the champion`