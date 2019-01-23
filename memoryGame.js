
document.addEventListener('DOMContentLoaded', function (){


const cards = document.querySelectorAll('.memoryCard');
const counter = document.querySelector(".move");
const pointer = document.querySelector(".points");
const hover = document.querySelector(".hoverGameOff");

var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;
var move = 0;
var points = 0;


// starta/ starta om 0-ställer   
function start(){
    cards.forEach(kort => {
        kort.classList.remove("flip");
        kort.classList.remove("match");
    });
    counter.innerHTML = move = 0;
    pointer.innerHTML = points = 0;
    hasFlippedCard = false;
    secondCard = null;
    firstCard = null;
    lockBoard = false;
  hover.classList.toggle('gameOn');

  // räknar antal klick
function moves(){
    move++;
    counter.innerHTML = move;
  }
  // lägger till css-flip vid klick
  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    
    this.classList.add('flip');
    moves();
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    checkForMatch();
}
// kollar om dataset matchar, gör dom de tas klick bort från korten med flip aktiv, är det inte match, tas flip bort med 1 sekunds fördröjning. 
function checkForMatch() {
  let isMatch = firstCard.id === secondCard.id;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {

  
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  points++;
  pointer.innerHTML = points;

 

        firstCard.classList.add('match');
        secondCard.classList.add('match');
// kollar om omgången är klar, startar om (ska ersättas med nåt som visar hur det gick, och val om att starta om)
if (points == 6){
    setTimeout(() => {
    start();
}, 2500);
}
  resetBoard();
}
// om ej match, tar bort css klass flip. så korten vänds tillbaka.
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}
// 0-ställer
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  
}

// blandar kortens ordning med Math.random, "()" runt funktionen gör att funktionen körs direkt.

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

// klick funktion på korten

cards.forEach(card => card.addEventListener('click', flipCard));
}




// startar spelet vid klick på start-knappen
document.getElementById("replay").addEventListener("click", start);
});