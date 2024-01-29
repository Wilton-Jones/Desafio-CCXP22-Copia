function addRedBorder(id) {
    element = document.querySelector(`#${id}`);
    element.style.border = '5px solid red';
}

// addRedBorder('sabado');


            //PLANO DE AÇÃO

//Criar classe com as propriedades desejadas
//Adicionar evento de mouse nos cards
//Criar função para criar sombra
//Testar

function highLightCard(selector) {
    var element = document.querySelector(selector);
    element.classList.toggle('cardHighLight');
}

TitleWithShadow = (selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle('shadowInTitle');
}


//ESSA FUNÇAO É USADA PARA DESCOBRIR QUAL E O CÓDIGO DO TECLADO QUE FOI PRESSIONADO.
function checkKeyboardCode() {
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        // Alert the key name and key code on keydown
        alert(`Key pressed ${name} key code ${code}`);
    },false)
}

function addKeyboardEventListeners() {
    document.addEventListener('keydown', (event) => {

        var ingresso1 = document.getElementById('quinta');
        var ingresso2 = document.getElementById('sexta');
        var ingresso3 = document.getElementById('sabado');
        var ingresso4 = document.getElementById('domingo');

        var code = event.code;
        if(code == 'Numpad1' ) {
            ingresso1.classList.toggle('cardHighLight')
            ingresso2.classList.remove('cardHighLight')
            ingresso3.classList.remove('cardHighLight')
            ingresso4.classList.remove('cardHighLight')
        }

        if(code == 'Numpad2' ) {
            ingresso1.classList.remove('cardHighLight')
            ingresso2.classList.toggle('cardHighLight')
            ingresso3.classList.remove('cardHighLight')
            ingresso4.classList.remove('cardHighLight')
        }

        if(code == 'Numpad3' ) {
            ingresso1.classList.remove('cardHighLight')
            ingresso2.classList.remove('cardHighLight')
            ingresso3.classList.toggle('cardHighLight')
            ingresso4.classList.remove('cardHighLight')
        }

        if(code == 'Numpad4' ) {
            ingresso1.classList.remove('cardHighLight')
            ingresso2.classList.remove('cardHighLight')
            ingresso3.classList.remove('cardHighLight')
            ingresso4.classList.toggle('cardHighLight')
        }

    }, false);
}

// checkKeyboardCode();

addKeyboardEventListeners();


//      PITCH INICIAL

//  -> Criar uma classe que representa o card selecionado
//  -> Criar um evento para quando clicarmos em um card ele executar uma função
//  -> Criar uma função que adiciona a classe selecionada e armazena ou retira o ingresso selecionado de um Array
//  -> Criar uma função que ao clicar no botão, apresenta na tela os ingressos selecionados

const ingressos = []

//USANDO FUCTION MANEIRA TRADICIONAL
// function selectCard(selector) {
//     var element = document.querySelector(selector);
//     element.classList.toggle('cardSelected');
//     if(ingressos.includes(selector)) ingressos.pop(selector);
//     else ingressos.push(selector);
// }

//USANDO ARROW FUCTION MANEIRA PRÁTICA E COMPACTA
selectCard = (selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle('cardSelected');
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector);
}


//USANDO FUCTION MANEIRA TRADICIONAL
// function showSelectedCards() {
//     if(ingressos.length == 0) alert('Por favor selecione um ingresso');
//     else alert('ingressos selecionados:' + ingressos);
// }

//USANDO ARROW FUCTION MANEIRA PRÁTICA E COMPACTA
showSelectedCards = () => {
    if(ingressos.length == 0) alert('Por favor selecione um ingresso');
    else alert('ingressos selecionados:' + ingressos);
}