// Visibilidade do botão das Habilidades

let buttonSkills = document.getElementById('readMore');

buttonSkills.addEventListener('click', function() {
    let card = document.querySelector('.card');
    card.classList.toggle('active');

    if(card.classList.contains('active')) {
        return buttonSkills.textContent = 'Ler menos';
    }

    buttonSkills.textContent = 'Ler mais'
});

// Btn Slider -- Certificados & Badges

const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrowLeft');
        
        if(isLeft) {
            currentItem -= 1;
        }else {
            currentItem += 1;
        }

        if(currentItem >= maxItems) {
            currentItem = 0;

        }

        if(currentItem < 0) {
            currentItem = maxItems - 1;
        }

        items.forEach(item => item.classList.remove('currentItem'));

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        });

        items[currentItem].classList.add('currentItem')

    })
})

// Menu

const hamburguer = document.getElementById("hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

// function isNavActive() {
//     const hamburguerIcon = document.getElementById("hamburguer");
//     return hamburguerIcon.classList.contains("active");
// }

// console.log(isNavActive());

// // Função para alterar dinamicamente o ícone
// function toggleIcon() {
//     const hamburguerIcon = document.getElementById("hamburguer");

//     if (isNavActive()) {
//         // Media query ativa, altere para o ícone fa-xmark
//         hamburguerIcon.classList.remove("fa-bars");
//         hamburguerIcon.classList.add("fa-xmark");
//     } else {
//         // Media query não ativa, reverta para o ícone fa-bars
//         hamburguerIcon.classList.remove("fa-xmark");
//         hamburguerIcon.classList.add("fa-bars");
//     }
// }

// // Chame a função ao carregar a página e sempre que a tela for redimensionada
// window.addEventListener("load", toggleIcon);
// window.addEventListener("resize", toggleIcon);