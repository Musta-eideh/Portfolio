//Primeiro titulo
const el = document.querySelector("#text");
const text = "Olá, meu nome é Mustafa Eideh."
const intervalo = 170;

function showText(el, text, intervalo) {
    const char = text.split("").reverse();
    const typer = setInterval(() => {

        if(!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop();

        el.innerHTML += next;
        
    }, intervalo);
    
}

showText(el, text, intervalo);

// Imagens de projetos

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function (){
    nextImage();
}, 5000);

function nextImage() {
    count++;
    if(count>4){
        count = 1;
    }
    
    document.getElementById("radio"+count).checked = true;
};

// Menu Responsivo

let header = document.getElementById('header');
let navigationHeader = document.getElementById('navigation_header');
let conteudo = document.getElementById('conteudo');
let showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if(showSidebar) {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
        conteudo.style.filter = 'blur(2px)';
    }else {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        conteudo.style.filter = '';
    }
};

function closeSidebar() {
    if(showSidebar) {
        toggleSidebar();
    }
};

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 768 && showSidebar){
        toggleSidebar();
    }
});