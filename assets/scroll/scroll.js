import ScrollReveal from 'scrollreveal';

const aboutContainer = document.querySelector('.about__container')
const productNew = document.querySelector('.products__new')
const categoriesContainer = document.querySelector('.categories__container')
const productContainer = document.querySelector('.products__section')
const benefitsContainer = document.querySelector('.benefits__cards__container')
const formContainer = document.querySelector('.form__container')
const cardOne = document.getElementById('card')
const cardTwo = document.getElementById('card2')
const cardThree = document.getElementById('card3')



const revealSection = (section, delay, duration, origin, distance,) => {
    ScrollReveal().reveal(section, { delay: delay, duration: duration, origin: origin, distance: distance, reset: true });
}



export const scrollInit = () => {
    revealSection(aboutContainer, 300, 2000, 'left', '50px')
    revealSection(productNew, 300, 2000, 'right', '50px')
    revealSection(categoriesContainer , 300, 2000, 'left', '50px')
    revealSection(productContainer, 400, 2000, 'right', '50px')
    revealSection(benefitsContainer , 300, 2000, 'left', '50px')
    revealSection(formContainer , 500, 2000, 'bottom', '50px')
    revealSection(cardOne, 300, 2000, 'left', '50px')
    revealSection(cardTwo, 400, 2500, 'bottom', '50px')
    revealSection(cardThree, 300, 3000, 'right', '50px')
    console.log(revealSection)
}