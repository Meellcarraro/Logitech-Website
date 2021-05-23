//MENU ADAPTABLE//
var burger = document.getElementById('burger');

function menuAdaptable (){
    const burger = document.getElementById('burger'),
    menu = document.getElementById('menu');

    burger.classList.toggle('active');
    menu.classList.toggle('active');    
}

burger.addEventListener('click', menuAdaptable);