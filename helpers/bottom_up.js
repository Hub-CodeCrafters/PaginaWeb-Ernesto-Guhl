

const buttom_up = document.getElementsByClassName("buttom_up");


buttom_up[0].addEventListener("click", scroll_up);
// funcion para que al hacer click en el boton de subir se haga un scroll hacia arriba
function scroll_up() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scroll_up);
        window.scrollTo(0, currentScroll - (currentScroll / 15));
    }
}


// funcion para que el bottom aparesca solo cuando este de bajo del filtro  y que cuando este en el filtro se desaparesca
window.onscroll = function () {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (scroll > 300) {
        buttom_up[0].style.transform ='scale(1)';
    }else if(scroll < 300){
        buttom_up[0].style.transform ='scale(0)';
    }

    
}