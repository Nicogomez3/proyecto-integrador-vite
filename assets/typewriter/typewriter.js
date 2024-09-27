import Typewriter from 'typewriter-effect/dist/core';

const typewriter = document.querySelector('.typewriter');

const typewriterEffect = new Typewriter(typewriter, {
    strings: ['TecnoShop', 'Garantía', 'Calidad', 'Tecnología'],
    autoStart: true,
    loop: true,
    deleteSpeed: 50
})

export const typerwriterInit = () => {
    console.log(typewriterEffect)
}