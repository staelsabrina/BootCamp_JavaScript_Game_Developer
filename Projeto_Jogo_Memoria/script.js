const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false; //variável que vai travar o tabuleiro enquanto a jogada ainda estiver acontecendo.


function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return; //Não deixa dar clique duas vezes na mesma carta.
    
    this.classList.add('flip'); /*O this é o contexto da função, no caso a carta específica em que está clicando*/
    //Não pode ser utilizado o toggle, mas sim o add, pois no toggle a class pode ser adicionada e retirada, no add só é adicionada uma vez e não pode ser retirado depois pelo mesmo evento.

    if(!hasFlippedCard){ //
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkFotMatch();
}

function checkFotMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }

    unflipCards();
}

// Função para desabilitar as cartas viradas com Match
function disableCards(){ 
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

// Função para desvirar as cartas que não deram Match
function unflipCards(){
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//Função para embaralhar as cartas, encapsulada como uma Immediate-Invoked Function, é uma função que é executada assim que definida.
(function shuffle(){
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12); // .floor arredonda o resultado da expressão
        card.style.order = randomPosition;
    })
})();

cards.forEach((card) => { //forEach vai percorrer cada ítem, no caso, cada carta e vai adicionar o flip em cada cada carta clicada.
    card.addEventListener('click', flipCard)
})

