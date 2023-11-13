// Obtén la referencia al contenedor del carrusel
const carouselInner = document.querySelector('.carousel-inner');

// Array con las URL de las imágenes
const images = [
  '../assets/images/carrusel/1.jpg',
  '../assets/images/carrusel/2.jpg',
  '../assets/images/carrusel/3.jpg',
  '../assets/images/carrusel/4.jpg',
  '../assets/images/carrusel/5.jpg',
  '../assets/images/carrusel/6.jpg',
  '../assets/images/carrusel/7.jpg',
  '../assets/images/carrusel/8.jpg',
  '../assets/images/carrusel/9.jpg',
  '../assets/images/carrusel/10.jpg',
  '../assets/images/carrusel/11.jpg',
  '../assets/images/carrusel/12.jpg',
  '../assets/images/carrusel/13.jpg',
  '../assets/images/carrusel/14.jpg',
  '../assets/images/carrusel/15.jpg',
  '../assets/images/carrusel/16.jpg',
  '../assets/images/carrusel/17.jpg',
  '../assets/images/carrusel/18.jpg',
  '../assets/images/carrusel/19.jpg',
  '../assets/images/carrusel/20.jpg',
  '../assets/images/carrusel/21.jpg',
  '../assets/images/carrusel/22.jpg',
];

// Variable para almacenar el índice de la imagen actual
let currentIndex = 0;

// Función para cargar las imágenes dinámicamente
function loadImages() {
    carouselInner.innerHTML = ''; // Limpia el contenido del carrusel
  
    // Crea elementos de imagen y los agrega al carrusel
    images.forEach((imageUrl) => {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.classList.add('carousel-img');
      img.style.display = 'none'; // Oculta inicialmente las imágenes
      img.setAttribute('loading', 'lazy'); 
      carouselInner.appendChild(img);
    });
  }
  
  // Función para mostrar la imagen actual
  function showImage(index) {
    // Oculta todas las imágenes
    const carouselImages = carouselInner.querySelectorAll('.carousel-img');
    carouselImages.forEach((img) => {
      img.style.display = 'none';
    });
  
    // Muestra la imagen actual
    carouselImages[index].style.display = 'block';
  
    // Actualiza el índice de la imagen actual
    currentIndex = index;
  }
  
  // Función para avanzar al siguiente imagen
  function nextImage() {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
  }
  
  // Función para retroceder a la imagen anterior
  function prevImage() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
  }



// Variable para almacenar el intervalo del carrusel
let carouselInterval;

// Función para iniciar el carrusel automático
function startCarousel() {
  carouselInterval = setInterval(nextImage, 2000); // Avanza cada 2 segundos (2000 milisegundos)
}

// Función para detener el carrusel automático
function stopCarousel() {
  clearInterval(carouselInterval);
}

// Agregar evento al contenedor del carrusel para pausar/reanudar el carrusel al hacer hover
const carouselContainer = document.querySelector('.carousel');
carouselContainer.addEventListener('mouseenter', stopCarousel);
carouselContainer.addEventListener('mouseleave', startCarousel);

// Cargar las imágenes iniciales
loadImages();

// Mostrar la primera imagen
showImage(0);

// Iniciar el carrusel automático
startCarousel();


// Agregar eventos de clic a los botones de navegación
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);








// se replica la funcion para el resposnisve de celualres que cargue 


// function loadImages() {
//   const carouselInner_celu = document.querySelector('.div_imagenes');
//     carouselInner_celu.innerHTML = ''; // Limpia el contenido del carrusel
  
//     // Crea elementos de imagen y los agrega al carrusel
//     images.forEach((imageUrl) => {
//       const img = document.createElement('img');
//       img.src = imageUrl;
//       img.classList.add('carousel-img');
//       img.style.display = 'none'; // Oculta inicialmente las imágenes
//       img.setAttribute('loading', 'lazy'); 
//       carouselInner.appendChild(img);
//     });
//   }

//   // loadImages();