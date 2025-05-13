// script.js

// Selecciona el contenedor del carrusel
const carouselContainer = document.querySelector('.carousel-container');
// Selecciona la pista del carrusel donde se encuentran las imágenes
const carousel = document.querySelector('.carousel');
// Selecciona todos los elementos (imágenes) dentro del carrusel
const carouselItems = document.querySelectorAll('.carousel-item');
// Selecciona el botón para ir a la imagen anterior
const prevButton = document.querySelector('.prev-button');
// Selecciona el botón para ir a la imagen siguiente
const nextButton = document.querySelector('.next-button');
// Selecciona el botón de WhatsApp
const whatsappButton = document.getElementById('whatsapp-button');

// Inicializa el índice de la imagen actual a 0 (la primera imagen)
let currentIndex = 0;
// Obtiene el número total de imágenes en el carrusel
const totalItems = carouselItems.length;

console.log('El archivo script.js se ha cargado correctamente.');

const updateCarousel = () => {
    console.log('La función updateCarousel se ha llamado.')
    // Calcula el valor de traslación necesario para mostrar la imagen actual
    // El valor es negativo porque estamos moviendo el carrusel hacia la izquierda
    const translateValue = -currentIndex * 100 + '%';
    // Aplica la transformación CSS al carrusel para desplazarlo y mostrar la imagen actual
    carousel.style.transform = `translateX(${translateValue})`;
    console.log('currentIndex:', currentIndex, 'translateValue:');
};

// Evento para el botón "Anterior"
prevButton.addEventListener('click', () => {
    // Decrementa el índice actual si no estamos en la primera imagen
    console.log('Botón Anterior clicado. currentIndex antes:', currentIndex);
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        // Si estamos en la primera imagen, vuelve a la última imagen (carrusel infinito)
        currentIndex = totalItems - 1;
    }
    // Llama a la función para actualizar la visualización del carrusel
    console.log('currentIndex después:', currentIndex);
    updateCarousel();
});

// Evento para el botón "Siguiente"
nextButton.addEventListener('click', () => {
    // Incrementa el índice actual si no estamos en la última imagen
    console.log('Botón Siguiente clicado. currentIndex antes:', currentIndex);
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        // Si estamos en la última imagen, vuelve a la primera imagen (carrusel infinito)
        currentIndex = 0;
    }
    // Llama a la función para actualizar la visualización del carrusel
    console.log('currentIndex después:', currentIndex);
    updateCarousel();
});

// Función flecha para abrir el chat de WhatsApp
const openWhatsAppChat = () => {
    // Define el número de teléfono de WhatsApp al que se enviará el mensaje
    // ¡Reemplaza 'TUNUMERODETELEFONO' con tu número real incluyendo el código de país!
    const phoneNumber = '+57310XXXXXXXX'; // Ejemplo para Colombia

    // Define un mensaje predeterminado (opcional)
    const message = encodeURIComponent('Hola, estoy interesado en sus servicios.');

    // Construye la URL de la API de WhatsApp
    // Para iniciar un chat sin mensaje predefinido, usa: `https://wa.me/${phoneNumber}`
    const whatsappURL = `https://wa.me/${3014266590}?text=${message}`;

    // Abre una nueva ventana o pestaña del navegador con la URL de WhatsApp
    window.open(whatsappURL, '_blank');
    // '_blank' indica que el enlace se abrirá en una nueva ventana o pestaña
};

// Evento para el clic en el botón de WhatsApp
whatsappButton.addEventListener('click', openWhatsAppChat);