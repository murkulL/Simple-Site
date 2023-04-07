window.addEventListener('load', function(){
    const arrow   = document.querySelector('.header__arrow-img');
    const menu    = document.querySelector('.header__menu-items');
    const link    = document.querySelector('.header__menu-link');
    const boxDiv  = document.querySelector('.header__arrow-down');
    

    arrow.addEventListener('click', function(){
        menu.classList.toggle('header__menu-items--active');
        link.classList.toggle('header__menu-link--active');
        boxDiv.classList.toggle('header__arrow-down--active')
    });
});













