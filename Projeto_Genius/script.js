let order = []; // array de ficará as ordens aleatórias das cores no jogo
let clickedOrder = []; //array onde ficará a ordem dos clicks nas cores
let score = 0; //score vai zerar quando errar

/* 
0 - verde
1 - vermelho
2 - amarelo
3 - azul */

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Função que vai sortear numeros de 0 a 3. Cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4); //Math.floor vai arredondar o numero, Math.random()*4 vai escolher aleatoriamente um numero entre 0 e 3.
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i)+1);
    }
}

//acende a próxima cor
let lightColor = (element, number) => {
    number = number*500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove("selected");
    });
}

//checa se os botões clicados são os mesmos da ordem gerada no jogo.
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//função para próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu!\nClique em Ok para reiniciar`);
    order = [];
    clickedOrder = [];
    playGame();
}

//Função de inicio do Jogo
let playGame = () => {
    alert('Bem vinda ao Gênesis!\nIniciando novo jogo!');
    score = 0;
    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicio do jogo
playGame();