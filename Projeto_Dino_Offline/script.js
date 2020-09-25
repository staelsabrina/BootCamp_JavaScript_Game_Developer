const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false; //diz se o dino está pulando
let position = 0; //posição inicial do dinossauro

function handleKeyUp(event){  //verifica se o usuário apertou a tecla espaço
    if(event.keyCode === 32){ //se a tecla pressionada foi espaço(keycode 32), então aciona função jump
        if(!isJumping){
            jump();
        }
    }
}

//função de pulo
function jump(){    
    isJumping = true; //dino está pulando
    let upInterval = setInterval(() => { //setInterval vai repetir o bloco de código a cada intervalo determinado, no caso, 20ms
        if (position >=150){ //se a posição do dino for 150px ou maior, o intervalor será limpo. Ou seja, o dino pára.
            clearInterval(upInterval);

            //descendo
            let downInterval = setInterval(() => { //se a posição for menor ou igual a zero, o dino pára.
                if(position <=0){
                    clearInterval(downInterval);
                    isJumping = false; //se chegou a zero, não está mais pulando e pode pular outra vez
                } else { //caso a posição seja maior que zero, o dino desce 20px a cada 20ms
                    position -= 20;
                    dino.style.bottom = position + 'px'; //passando passando parâmetro css para o dino
                }
            },20);
        } else { //caso a posição não tenha atingido 150px, o dino sobe 20px a cada 20ms.
            //subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div'); //Aqui o js vai gerar elementos HTML, no caso, uma div.
    let cactusPosition = 1000; //define a posição do cactus
    let randomTime = Math.random() * 6000; //cria a aleatoriedade de criação de um novo cactus
    
    cactus.classList.add('cactus'); //adicionando uma classe de nome cactus, na constante cactus
    cactus.style.left = 1000 + 'px'; 
    background.appendChild(cactus); //adicionar um filho. 

    let leftInterval = setInterval(() => { //movimenta o cactus para a esquerda
        
        if (cactusPosition < -60) { //se a posição do cactus for menor que -60(largura dele), ele vai desaparecer
            clearInterval(leftInterval);
            background.removeChild(cactus); //remove o filho (cactus) do background. "some".
        } else if (cactusPosition > 0 &&  cactusPosition < 60 && position < 60) { 
            //game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo!</h1>';
        } else { //caso o cactus não tenha atingido a posição -60
            cactusPosition -= 10; //recebe -10 px
            cactus.style.left = cactusPosition + 'px';
        }
    },20);

    setTimeout(createCactus, randomTime); //executa uma determinada função depois de um determinado tempo. No caso, mostra um novo cactus na tela em um tempo randômico

}

createCactus();

document.addEventListener('keydown', handleKeyUp); //addEventListener vai escutar um evento realizado pelo usuário, keydown vai verificar se o usuário apertou uma tecla.

