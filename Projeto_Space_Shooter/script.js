const yourship = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');
const aliensImg = ['img/monster-1.png', 'img/monster-2.png', 'img/monster-3.png', 'img/monster-4.png', 'img/monster-5.png', 'img/monster-6.png'];
const instructionText = document.querySelector('.game-instructions');
const startButton = document.querySelector('.start-button');
let alienInterval;

//sons
var somDisparo = document.getElementById('somDisparo');
var somExplosao = document.getElementById('somExplosao');
var somFundo = document.getElementById('somFundo');
var somGameover = document.getElementById('somGameover');
var somStart = document.getElementsByClassName('somStart')[0];

//música em loop
somStart.addEventListener("ended", function(){ somStart.currentTime = 0; somStart.play();}, false);
somStart.play();


//Função que cria os movimentos da nave: Sobe/Desce/Tiro.
function flyShip(event){
    if(event.key === 'ArrowUp'){
        event.preventDefault();
        moveUp();
    } else if(event.key === 'ArrowDown') {
        event.preventDefault();
        moveDown();
    } else if(event.key === " ") {
        event.preventDefault();
        fireLaser();
    }
}

//Função de subir 
function moveUp(){
    let topPosition = getComputedStyle(yourship).getPropertyValue('top'); //getComputedStyle puxa elementos do CSS
    if(topPosition === "0px") {
        return;
    } else {
        let position = parseInt(topPosition);
        position -= 10;
        yourship.style.top = `${position}px`;
    }
}

//Função de descer
function moveDown(){
    let topPosition = getComputedStyle(yourship).getPropertyValue('top');
    if (topPosition === "540px") {
        return;
    } else {
        let position = parseInt(topPosition);
        position += 10;
        yourship.style.top = `${position}px`;
    }
}

//Função de tiro
function fireLaser(){
    let laser = createLaserElement();
    playArea.appendChild(laser);
    moveLaser(laser);
    somDisparo.play();
}

function createLaserElement(){
    let xPosition = parseInt(window.getComputedStyle(yourship).getPropertyValue('left'));
    let yPosition = parseInt(window.getComputedStyle(yourship).getPropertyValue('top'));
    let newLaser = document.createElement('img');
    newLaser.src = 'img/shoot.png';
    newLaser.classList.add('laser');
    newLaser.style.left = `${xPosition}px`;
    newLaser.style.top = `${yPosition - 10}px`;
    return newLaser;
}

function moveLaser(laser) {
    let laserInterval = setInterval(() => {
        let xPosition = parseInt(laser.style.left);
        let aliens = document.querySelectorAll('.alien');

        aliens.forEach((alien) => { //comparando se cada alien foi atingido, se sim, troca a src da imagem para explosão
            if(checkLaserCollision(laser, alien)){
                alien.src = 'img/explosion.png';
                alien.classList.remove('alien');
                alien.classList.add('dead-alien');
            }
        })

        if (xPosition === 340) {
            laser.remove();
        } else {
            laser.style.left = `${xPosition + 8}px`
        }
    }, 10);
}

//Função para criar inimigos aleatoriamente
function createAliens() {
    let newAlien = document.createElement('img');
    let alienSprite = aliensImg[Math.floor(Math.random()* aliensImg.length)]; //sorteio das imagens dos Aliens
    newAlien.src = alienSprite;
    newAlien.classList.add('alien');
    newAlien.classList.add('alien-transition');
    newAlien.style.left = '370px';
    newAlien.style.top = `${Math.floor(Math.random() * 330) + 30}px`;
    playArea.appendChild(newAlien);
    moveAlien(newAlien)
}

//Função para movimentar os inimigos
function moveAlien(alien) {
    let moveAlienInterval = setInterval(() =>{
        let xPosition = parseInt(window.getComputedStyle(alien).getPropertyValue('left'));
        if (xPosition <= 20) {
            if(Array.from(alien.classList).includes('dead-alien')){
                alien.remove();
            } else {
                gameOver();
            } 
        }else {
            alien.style.left = `${xPosition -4}px`;
        }
    }, 30);
}

//Função para colisão
function checkLaserCollision(laser, alien) {
    let laserTop = parseInt(laser.style.top);
    let laserLeft = parseInt(laser.style.left);
    let laserBottom = laserTop -20;
    let alienTop = parseInt(alien.style.top);
    let alienLeft = parseInt(alien.style.left);
    let alienBottom = alienTop -30;

    if(laserLeft != 340 && laserLeft + 40 >= alienLeft){
        if(laserTop <= alienTop && laserTop >= alienBottom) {
            somDisparo.pause();
            somExplosao.play();
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

//inicio do jogo
startButton.addEventListener('click', (event) => {
    playGame();
    somStart.pause();
    somFundo.addEventListener("ended", function(){ somFundo.currentTime = 0; somFundo.play();}, false);
    somFundo.play();
});

function playGame(){
    startButton.style.display = 'none';
    instructionText.style.display = 'none';
    window.addEventListener('keydown', flyShip);
    alienInterval = setInterval(() => {
        createAliens();
    }, 2000);
};

//Função de Game Over
function gameOver() {
    somFundo.pause();
    somGameover.play();
    window.removeEventListener('keydown', flyShip);
    clearInterval(alienInterval);
    let aliens = document.querySelectorAll('.alien');
    aliens.forEach((alien) => alien.remove());
    let lasers = document.querySelectorAll('.laser');
    lasers.forEach((laser) => laser.remove());
    setTimeout(() => {
        alert('Game Over!');
        yourship.style.top = "250px";
        startButton.style.display = "block";
        instructionText.style.display = "block";
    });
}