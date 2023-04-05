window.addEventListener('load', function(){
    let arrow  = document.querySelector('.header__arrow-img');
    let menu   = document.querySelector('.header__menu-items');
    let link   = document.querySelector('.header__menu-link');
    let boxDiv = document.querySelector('.header__arrow-down');


    arrow.addEventListener('click', function(){
        menu.classList.toggle('header__menu-items--active');
        link.classList.toggle('header__menu-link--active');
        boxDiv.classList.toggle('header__arrow-down--active')
        

    })
})





