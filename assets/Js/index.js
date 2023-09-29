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