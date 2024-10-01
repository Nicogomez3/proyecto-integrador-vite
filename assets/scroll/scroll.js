import ScrollReveal from 'scrollreveal';

const aboutContainer = document.querySelector('.about__container')
//const productNew = document.querySelector('.products__new__section')
const categoriesContainer = document.querySelector('.products__categories')
const productContainer = document.querySelector('.products__container')
// const benefitsContainer = document.querySelector('.benefits__cards__container')
const formContainer = document.querySelector('.form__container')
// const cardOne = document.getElementById('card')
// const cardTwo = document.getElementById('card2')
// const cardThree = document.getElementById('card3')
//const header = document.querySelector('header')


// Inicializar ScrollReveal
ScrollReveal().reveal('.reveal', {
    duration: 2000, // Duración de la animación en milisegundos
    origin: 'top', // Dirección desde la que aparece el elemento
    distance: '50px', // Distancia que recorre el elemento
    opacity: 0, // Opacidad inicial
    easing: 'ease-in-out', // Efecto de la animación
    reset: true // Permite que la animación se repita cada vez que se hace scroll
});




const revealSection = (section, delay, duration, origin, distance,) => {
    ScrollReveal().reveal(section, { delay: delay, duration: duration, origin: origin, distance: distance, opacity: 0,
        easing: 'ease-in-out',  reset: true, mobile: true });
}



export const scrollInit = () => {
    revealSection(aboutContainer, 300, 2000)
    // revealSection(productNew, 300, 2000, 'top', '50px')
    revealSection(categoriesContainer , 300, 2000, 'left', '50px')
    revealSection(productContainer, 400, 2000, 'bottom', '50px')
    // revealSection(benefitsContainer , 300, 2000, 'left', '50px')
    revealSection(formContainer , 500, 2000, 'bottom', '50px')
    //  revealSection(cardOne, 300, 2000, 'left', '50px')
    //  revealSection(cardTwo, 400, 2500, 'bottom', '50px')
    //  revealSection(cardThree, 300, 3000, 'right', '50px')
    //  revealSection(header, 300, 1000, 'top', '50px')
    console.log(revealSection)
 
}

// Función para cambiar el color del header al hacer scroll
const changeHeaderColorOnScroll = () => {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
};

// Inicializar la función
changeHeaderColorOnScroll();