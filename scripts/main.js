history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});


function removeHash(){
    history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
}

$(document).ready(function(){
    const menuBtn = $('.menubtn');

    menuBtn.click(()=>{
        setTimeout(()=>{
            removeHash();
        }, 5)
    })

    
})



function togglenav(){
    const nav = document.getElementById('mobile-nav');

    const arrow = document.getElementById('nav-arrow');

    if(nav.style.transform === 'translateY(0%)'){
        nav.style.transform = 'translateY(-80%)';
        arrow.style.borderTop = '24px solid white';
        arrow.style.borderBottom = '0px solid white';
    } else {
        nav.style.transform = 'translateY(0%)';
        arrow.style.borderTop = '0px solid white';
        arrow.style.borderBottom = '24px solid white';
    } 
}