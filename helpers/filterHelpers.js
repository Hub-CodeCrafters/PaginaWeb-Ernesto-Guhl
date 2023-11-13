
// const categories = document.getElementsByClassName("categories_li")
// const categories_li_a = document.getElementsByClassName("categories_li_a")
const filter_one = document.getElementsByClassName("filter_one")
const filter_two = document.getElementsByClassName("filter_two")
const filter_three = document.getElementsByClassName("filter_three")
const filter_four = document.getElementsByClassName("filter_four")

//  funcion que elimina todos los filtros o el div del subfiltro osea los que se muestran las opciones  al dar clic en el filtro principal(analisís territorial etc)
  export const removeFilterSubtipo=(selectedFilter)=> {

     const filters = [filter_one[0], filter_two[0], filter_three[0], filter_four[0]];
     for (let i = 0; i < filters.length; i++) {
       if (filters[i] !== selectedFilter) {
         filters[i].classList.remove("add");
       }else{
        filters[i].classList.remove("add");
       }
     }
   }
  
 
// funcion que  quita el color establecido  azul al darle clic, es diferente al del hover 
 export const  removeFilterSelec=(contenedor_general,contenedor_letra,p)=> {
  for (let i = 0; i < contenedor_general.length; i++) {
    if (i !== p) {
      contenedor_general[i].classList.remove("categorie_select");
      contenedor_letra[i].style.color = "#60762e";
    }
  }
}


// funcion que cambia el color y deja ver que hicieron clic en en filtro
export const addSelecFilter = (contenedor_general,contenedor_letra,p) =>{

    if(contenedor_general[p].classList.contains("categorie_select")){
        contenedor_general[p].classList.toggle("categorie_select")
        contenedor_letra[p].style.color = "#60762e"
    }else{
        contenedor_general[p].classList.toggle("categorie_select")
        contenedor_letra[p].style.color = "white"
    }
    
}

