const clickButton = document.querySelector('.icon');
let subMenu = document.getElementById('menu');

clickButton.addEventListener('click', function (){
    subMenu.classList.toggle('View-menu');
})