// $(window).on('unload', function() { $(window).scrollTop(0); }); window.onunload = function(){ window.scrollTo(0,0); } if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; } 
'use strict'

const hamburgerNav = document.querySelector('.hamburger-btn')
const navigation = document.querySelector('.navigation')



hamburgerNav.addEventListener('click', () => {
    if (navigation.style.display === "none") {
        navigation.style.display="block";
        navigation.classList.add('open')
    } else {
        navigation.style.display = "none";
        navigation.classList.remove('open')
    }
    
});


