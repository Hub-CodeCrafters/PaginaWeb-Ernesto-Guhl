// archivo que se encarga de mostrar la informacion de las publicaciones o libros segun donde se utilice


// funcion  para mostrar los años de la data 
export const showYears = (data, divId) => {

    const divElement = document.getElementById(divId);
    const templateElemento = document.getElementById('template_elemento');

    data.forEach(element => {
        const plantillaYear = document.importNode(templateElemento.content, true);
        plantillaYear.querySelector('.year').textContent = element;
        plantillaYear.querySelector('.year').setAttribute(`${divId}-year`, element);
        plantillaYear.querySelector('.categorie_cars').setAttribute(`${divId}-year`, element);

        divElement.parentNode.insertBefore(plantillaYear, divElement.nextElementSibling);
    });
};

export const showContent = (data, tipo) => {

    const templateContent = document.getElementById('template_content');

    data.forEach(element => {
        if (element.tipo === tipo) {
            const plantillaCarta = document.importNode(templateContent.content, true);
            const ContainerCarInformes = document.querySelector(`.categorie_cars[${tipo}-year="${element.year}"]`);
            if (ContainerCarInformes) {
                plantillaCarta.querySelector('.cart_img').src = element.img_principal;
                plantillaCarta.querySelector('.cart_p').textContent = element.title;
                plantillaCarta.querySelector('.cart_button').href = element.url
                ContainerCarInformes.appendChild(plantillaCarta);
            }
        }
    });
}

// esta funcion se encarga de mostrar todas las tarjetas de la data que se le pasa  en su corespondiente año  y  tipo
export const showPrensa = (data, year) => {

    const templateContent = document.getElementById('template_content');

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });
    const swiperWrapper = document.querySelector('.mySwiper_wrapper');

    data.forEach(element => {
        const plantillaCarta = document.importNode(templateContent.content, true);
        // declaramos el  funcionamiento antes de mostrar cada elemento
        // mostramos los elementos en el dom
        const newDiv1 = document.createElement('div');
        newDiv1.classList.add('swiper-slide', 'swiper_slide_articulo');
        newDiv1.innerHTML = `
                <a class="carrousel_icon"  href="${element.url_pdf}" target="_blank">
                <img class="carrousel_icon_img" src="../assets/icons/bxs-right-top-arrow-circle.svg">
                </a>
                <img loading="lazy" class="carrousel_img" src="${element.img_principal}" alt="">
                <span class="carrousel_span" >${element.title}</span>
                <p class="carrousel_p">${element.year}</p>
                `;
        swiperWrapper.appendChild(newDiv1);
    });
};

// funcion encargada de mostrar todo los años para el filtro de fecha 
export const showAllYears = (data) => {

    const containerYear = document.getElementById('books_tec-fecha')

    var swiper = new Swiper(".swiperYear", {
        slidesPerView: 7,
        grid: {
            rows: 1,
        },
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 6,
                spaceBetween: 10
            },
            960: {
                slidesPerView: 7,
                spaceBetween: 10
            }
        }
    });

    const swiper_wrapper_year = document.querySelector('.swiper-wrapper-year');


    data.forEach(element => {
        const newDiv1 = document.createElement('div');
        newDiv1.classList.add('swiper-slide', 'swiper_slide_year');
        newDiv1.innerHTML = `

<p class="filter_tipo" id = "books_tec-fecha" >${element}</p>
`;
        swiper_wrapper_year.appendChild(newDiv1);
    })
}


export const showVideos = (data) => {
    var swiper = new Swiper(".swiperVideos", {
        // slidesPerView: 4,
        grid: {
            rows: 1,
        },
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            960: {
                slidesPerView: 4,
                spaceBetween: 10
            }
        }
    });

    const swiperWrappervideo = document.querySelector('.swiper-wrapper-videos');

    data.forEach(element => {
        const newDiv1 = document.createElement('div');
        newDiv1.classList.add('swiper-slide', 'swiper_slide_video');
        // Asignar la URL del video al atributo src
        newDiv1.innerHTML = `
  <video class="video" controls>
    <source src="${element}" type="video/mp4">
    Tu navegador no admite la reproducción de videos.
  </video>
`;
        // Agregar la propiedad controls para mostrar los controles de video
        swiperWrappervideo.appendChild(newDiv1);

    })

}

// export const showFotos = (data) => {
//     var swiper = new Swiper(".swiperFotos", {
//         effect: 'cube',
//         grabCursor: true, // Agregado para mejorar la experiencia de usuario al pasar sobre el swiper
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         },
//     });

//     const swiperWrappervideo = document.querySelector('.swiper-wrapper-fotos');

//     data.forEach(element => {
//         const newDiv1 = document.createElement('div');
//         newDiv1.classList.add('swiper-slide', 'swiper_slide_fotos');
//         // Asignar la URL del video al atributo src
//         newDiv1.innerHTML = `
//         <a class="carrousel_icon"  href="${element.url_pdf}" target="_blank">
//                 <img class="carrousel_icon_img" src="../assets/icons/bxs-right-top-arrow-circle.svg">
//                 </a>
//     <img class="imgFotos" src="${element.url_img}" alt="no esta">
  
// `;
//         // Agregar la propiedad controls para mostrar los controles de video
//         swiperWrappervideo.appendChild(newDiv1);

//     })

// }
export const showFotos = (data) => {
    var swiper = new Swiper(".swiperFotos", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    const swiperWrappervideo = document.querySelector('.swiper-wrapper-fotos');

    data.forEach(element => {
        const newDiv1 = document.createElement('div');
        newDiv1.classList.add('swiper-slide', 'swiper_slide_fotos');
        // Asignar la URL del video al atributo src
        newDiv1.innerHTML = `
        <a class="carrousel_icon"  href="${element.url_pdf}" target="_blank">
                <img class="carrousel_icon_img" src="../assets/icons/bxs-right-top-arrow-circle.svg">
                </a>
    <img class="imgFotos" src="${element.url_img}" alt="no esta">
  
`;
        // Agregar la propiedad controls para mostrar los controles de video
        swiperWrappervideo.appendChild(newDiv1);

    })

}




export const showEnMemoria = (data) => {
    var swiper = new Swiper(".swiperEnMemoria", {
        grid: {
            rows: 1,
        },
        spaceBetween: 5,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 5
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 5
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            960: {
                slidesPerView: 4,
                spaceBetween: 5
            }

        }
    });
    const section_en_memoria = document.querySelector('.swiper-wrapper-EnMemoria');
    // const section:

    data.forEach(element => {

        const newDiv1 = document.createElement('div');
        newDiv1.classList.add('swiper-slide', 'post-content-div');
        newDiv1.setAttribute('id', 'post-content-div_modifid');
        // Asignar la URL del video al atributo src

        newDiv1.innerHTML = `
  <h6 class="h6_modifid">${element.name} </h6>
  <img loading="lazy" src="${element.url_img}"><br>
  <a class="books-cards_button" href="${element.url_palabras}" target="_blank">Ver palabras
  &#10132;
  </a>
`;
        // Agregar la propiedad controls para mostrar los controles de video
        section_en_memoria.appendChild(newDiv1);
    })
}