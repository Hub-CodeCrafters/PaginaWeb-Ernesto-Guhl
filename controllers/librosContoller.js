// archivo encargado de  interatuar con la funciones que sacan los datos y con las que muestran los datos  osea con los servicio y view necesarios para mostrar la informacion de los libros segun el filtro

import { getAllPublications, getPublicationByCategory, everyYear, removeElementsByClass,getUniqueYears } from '../services/contentService.js';
import { showYears,showContent, showAllYears } from '../views/contentView.js';
import { removeFilterSubtipo, addSelecFilter, removeFilterSelec } from '../helpers/filterHelpers.js';


// data necesaria
import Libros from '../assets/data/libros.js';

const categories = document.getElementsByClassName("categories_li")
const categories_li_a = document.getElementsByClassName("categories_li_a")
const filter_one = document.getElementsByClassName("filter_one")
const filter_two = document.getElementsByClassName("filter_two")
const filter_three = document.getElementsByClassName("filter_three")
const filter_four = document.getElementsByClassName("filter_four")


// cargamos los datos principales
document.addEventListener("DOMContentLoaded", function () {
    main(Libros)
})

 //esta funcion es la que se encarga de darle funcionalidad alas categorias principales osea(mostrar sub categorias borrar seleccion etc y agregar selecion y  eliminar los filtros)
document.addEventListener("DOMContentLoaded", function () {

    const filter_tipo = document.querySelectorAll(".filter_tipo");
    Array.from(categories).forEach((categorie) => {
        categorie.addEventListener("click", () => {
            if (categorie.id == "Análisis territorial") {
                main(Libros)
                removeFilterSubtipo(filter_one[0])
                filter_one[0].classList.toggle("add")
                removeFilterSelec(categories, categories_li_a, 0)
                removeFilterSelec(filter_tipo, filter_tipo, 0)
                addSelecFilter(categories, categories_li_a, 0)
            } else if (categorie.id == "Formulación de politicas") {
                main(Libros)
                removeFilterSubtipo(filter_two[0])
                filter_two[0].classList.toggle("add")
                removeFilterSelec(categories, categories_li_a, 1)
                removeFilterSelec(filter_tipo, filter_tipo, 1)
                addSelecFilter(categories, categories_li_a, 1)
            } else if (categorie.id == "Tecnologias limpias") {
                main(Libros)
                removeFilterSubtipo(filter_three[0])
                filter_three[0].classList.toggle("add")
                removeFilterSelec(categories, categories_li_a, 2)
                removeFilterSelec(filter_tipo, filter_tipo, 2)
                addSelecFilter(categories, categories_li_a, 2)
            } else if (categorie.id == "Fecha") {
                main(Libros)
                removeFilterSubtipo(filter_four[0])
                filter_four[0].classList.toggle("add")
                removeFilterSelec(categories, categories_li_a, 3)
                removeFilterSelec(filter_tipo, filter_tipo, 3)
                addSelecFilter(categories, categories_li_a, 3)
            }
            else if (categorie.id == "Borrar") {
                main(Libros)
                removeFilterSubtipo(filter_four[0])
                removeFilterSelec(categories, categories_li_a, 4)
                removeFilterSelec(filter_tipo, filter_tipo, 4)
            }
        })
    })
})

// amanejamos los efectos del clic de las sub categorias  y la mustra de los datos con el filtro selecionado 

document.addEventListener("DOMContentLoaded", function () {
    const filter_tipo = document.querySelectorAll(".filter_tipo");
    Array.from(filter_tipo).forEach((categorie) => {
        categorie.addEventListener("click", () => {
            const index = Array.from(filter_tipo).indexOf(categorie);
            if (categorie.id == "books_escala-regional") {
                removeFilterSelec(filter_tipo, filter_tipo, 0)
                addSelecFilter(filter_tipo, filter_tipo, 0)
                filtro(Libros, 'escalas_regionales')
            } else if (categorie.id == "books_escala-local") {
                removeFilterSelec(filter_tipo, filter_tipo, 1)
                addSelecFilter(filter_tipo, filter_tipo, 1)
                filtro(Libros, 'escalas_locales')
            } else if (categorie.id == "books_investigacion-ambiental") {
                removeFilterSelec(filter_tipo, filter_tipo, 2)
                addSelecFilter(filter_tipo, filter_tipo, 2)
                filtro(Libros, 'investigacion_ambiental')
            } else if (categorie.id == "books_manejo-agua") {
                removeFilterSelec(filter_tipo, filter_tipo, 3)
                addSelecFilter(filter_tipo, filter_tipo, 3)
                filtro(Libros, 'manejo_de_agua')
            }
            else if (categorie.id == "books_tec-limpias") {
                removeFilterSelec(filter_tipo, filter_tipo, 4)
                addSelecFilter(filter_tipo, filter_tipo, 4)
                filtro(Libros, 'tecnologias_limpias')
            } else if (categorie.id == "books_tec-fecha") {
                removeFilterSelec(filter_tipo, filter_tipo, index)
                addSelecFilter(filter_tipo, filter_tipo, index)
                const year = parseInt(categorie.textContent, 10)
                filtro(Libros, year)

            }

        })
    })

});





//  esto siempre se debe de ejecutar por que son los años del filtro 
const datayear = everyYear(Libros)
showAllYears(datayear)


//  esta funcion es la encargada de mostrar toda la informacion sin filtros los años los articulos prensa etc 
function main(data) {
    removeElementsByClass('categorie_year')
    removeElementsByClass('categorie_cars')
    const dataObtenidad = getAllPublications(data);
    const yearsCapitulos = getUniqueYears(dataObtenidad,'capitulos');
    const yearsLibros = getUniqueYears(dataObtenidad,'libros');
    showYears(yearsLibros,'libros');
    showYears(yearsCapitulos,'capitulos');
    // mostramos las cartas
    showContent(dataObtenidad,'libros');
    showContent(dataObtenidad,'capitulos');
}



// esta funcion es la encargada de mostrar los datos por categoria o segun el filtro selecionado
function filtro(data, category) {
    removeElementsByClass('categorie_year')
    removeElementsByClass('categorie_cars')
    // removeElementsByClass('swiper_slide_articulo')
    const dataObtenidad = getPublicationByCategory(data, category);
    const yearsCapitulos = getUniqueYears(dataObtenidad,'capitulos');
    const yearsLibros = getUniqueYears(dataObtenidad,'libros');
    showYears(yearsLibros,'libros');
    showYears(yearsCapitulos,'capitulos');
    // mostrar carats
    showContent(dataObtenidad,'libros');
    showContent(dataObtenidad,'capitulos');
}


